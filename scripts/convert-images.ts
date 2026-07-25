import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import sharp from 'sharp';

const DEFAULT_SOURCE_DIRECTORY = path.join(
  process.cwd(),
  'assets',
  'images-source'
);
const DEFAULT_OUTPUT_DIRECTORY = path.join(process.cwd(), 'public', 'media');
const SUPPORTED_EXTENSIONS = new Set([
  '.avif',
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.tif',
  '.tiff',
  '.webp',
]);

type OutputFormat = 'webp';

function fail(message: string): never {
  throw new Error(`Image conversion failed: ${message}`);
}

function parseArguments(): {
  outputDirectory: string;
  sourceDirectory: string;
} {
  const arguments_ = process.argv.slice(2);

  if (arguments_.includes('--help') || arguments_.includes('-h')) {
    console.info(`Usage: npm run images:convert -- [source-directory] [output-directory]

Defaults:
  source-directory  assets/images-source
  output-directory  public/media`);
    process.exit(0);
  }

  if (arguments_.length > 2) {
    fail('expected at most a source directory and an output directory.');
  }

  return {
    sourceDirectory: path.resolve(arguments_[0] ?? DEFAULT_SOURCE_DIRECTORY),
    outputDirectory: path.resolve(arguments_[1] ?? DEFAULT_OUTPUT_DIRECTORY),
  };
}

async function listImages(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return listImages(entryPath);
      if (!entry.isFile()) return [];

      return SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
        ? [entryPath]
        : [];
    })
  );

  return files.flat().sort();
}

function outputPath(
  sourceFile: string,
  sourceDirectory: string,
  outputDirectory: string,
  format: OutputFormat
): string {
  const relativePath = path.relative(sourceDirectory, sourceFile);
  const parsedPath = path.parse(relativePath);

  return path.join(
    outputDirectory,
    parsedPath.dir,
    `${parsedPath.name}.${format}`
  );
}

async function convertImage(
  sourceFile: string,
  sourceDirectory: string,
  outputDirectory: string
): Promise<number> {
  const destination = outputPath(
    sourceFile,
    sourceDirectory,
    outputDirectory,
    'webp'
  );
  await mkdir(path.dirname(destination), { recursive: true });
  const result = await sharp(sourceFile, { animated: false })
    .rotate()
    .webp({ effort: 5, quality: 82 })
    .toFile(destination);

  return result.size;
}

function ensureUniqueOutputPaths(
  sourceFiles: string[],
  sourceDirectory: string,
  outputDirectory: string
): void {
  const sourceByDestination = new Map<string, string>();

  for (const sourceFile of sourceFiles) {
    const destination = outputPath(
      sourceFile,
      sourceDirectory,
      outputDirectory,
      'webp'
    );
    const original = sourceByDestination.get(destination);

    if (original !== undefined) {
      fail(
        `${path.relative(sourceDirectory, sourceFile)} and ${path.relative(sourceDirectory, original)} would both create ${path.relative(outputDirectory, destination)}.`
      );
    }

    sourceByDestination.set(destination, sourceFile);
  }
}

async function main(): Promise<void> {
  const { sourceDirectory, outputDirectory } = parseArguments();

  let sourceStats;
  try {
    sourceStats = await stat(sourceDirectory);
  } catch {
    fail(`source directory does not exist: ${sourceDirectory}`);
  }

  if (!sourceStats.isDirectory()) {
    fail(`source path is not a directory: ${sourceDirectory}`);
  }

  const sourceFiles = await listImages(sourceDirectory);
  if (sourceFiles.length === 0) {
    fail(`no supported images found in ${sourceDirectory}`);
  }

  ensureUniqueOutputPaths(sourceFiles, sourceDirectory, outputDirectory);

  let totalBytes = 0;
  for (const sourceFile of sourceFiles) {
    totalBytes += await convertImage(
      sourceFile,
      sourceDirectory,
      outputDirectory
    );
    console.info(`Converted ${path.relative(sourceDirectory, sourceFile)}`);
  }

  console.info(
    `Created ${sourceFiles.length * 2} files from ${sourceFiles.length} images in ${outputDirectory} (${Math.round(totalBytes / 1024)} KiB).`
  );
}

await main();
