import { createHash } from 'node:crypto';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import sharp from 'sharp';

const MEDIA_DIRECTORY = path.join(process.cwd(), 'public', 'media');
const RASTER_FILE_LIMIT = 750 * 1024;
const SVG_FILE_LIMIT = 100 * 1024;
const OPEN_GRAPH_FILE_LIMIT = 400 * 1024;
const TOTAL_MEDIA_LIMIT = 6 * 1024 * 1024;

const FORMAT_BY_EXTENSION = new Map([
  ['.avif', 'heif'],
  ['.gif', 'gif'],
  ['.jpeg', 'jpeg'],
  ['.jpg', 'jpeg'],
  ['.png', 'png'],
  ['.svg', 'svg'],
  ['.webp', 'webp'],
]);

type MediaFile = {
  absolutePath: string;
  relativePath: string;
  size: number;
};

function formatBytes(bytes: number): string {
  return `${Math.ceil(bytes / 1024)} KiB`;
}

function fail(messages: string[]): never {
  throw new Error(
    `Media check failed:\n${messages.map((message) => `- ${message}`).join('\n')}`
  );
}

async function findMediaFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return findMediaFiles(entryPath);
      if (entry.isFile()) return [entryPath];

      return [];
    })
  );

  return nestedFiles.flat().sort();
}

function byteLimitFor(file: MediaFile): number {
  if (path.basename(file.relativePath).startsWith('og-')) {
    return OPEN_GRAPH_FILE_LIMIT;
  }

  return path.extname(file.relativePath).toLowerCase() === '.svg'
    ? SVG_FILE_LIMIT
    : RASTER_FILE_LIMIT;
}

async function checkFile(file: MediaFile): Promise<string[]> {
  const errors: string[] = [];
  const extension = path.extname(file.relativePath).toLowerCase();
  const expectedFormat = FORMAT_BY_EXTENSION.get(extension);

  if (expectedFormat === undefined) {
    return [
      `${file.relativePath}: unsupported format ${extension || '(no extension)'}.`,
    ];
  }

  const limit = byteLimitFor(file);
  if (file.size > limit) {
    errors.push(
      `${file.relativePath}: ${formatBytes(file.size)} exceeds the ${formatBytes(limit)} budget.`
    );
  }

  try {
    const metadata = await sharp(file.absolutePath, {
      animated: false,
    }).metadata();

    if (metadata.format !== expectedFormat) {
      errors.push(
        `${file.relativePath}: extension ${extension} does not match decoded ${metadata.format ?? 'unknown'} format.`
      );
    }

    if (
      metadata.width === undefined ||
      metadata.height === undefined ||
      metadata.width < 1 ||
      metadata.height < 1
    ) {
      errors.push(`${file.relativePath}: missing intrinsic dimensions.`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    errors.push(`${file.relativePath}: cannot decode image (${message}).`);
  }

  return errors;
}

async function findDuplicates(files: MediaFile[]): Promise<string[][]> {
  const filesByHash = new Map<string, string[]>();

  for (const file of files) {
    const digest = createHash('sha256')
      .update(await readFile(file.absolutePath))
      .digest('hex');
    const matches = filesByHash.get(digest) ?? [];
    matches.push(file.relativePath);
    filesByHash.set(digest, matches);
  }

  return [...filesByHash.values()].filter((matches) => matches.length > 1);
}

async function main(): Promise<void> {
  let mediaStats;
  try {
    mediaStats = await stat(MEDIA_DIRECTORY);
  } catch {
    fail([`media directory does not exist: ${MEDIA_DIRECTORY}`]);
  }

  if (!mediaStats.isDirectory()) {
    fail([`media path is not a directory: ${MEDIA_DIRECTORY}`]);
  }

  const absolutePaths = await findMediaFiles(MEDIA_DIRECTORY);
  if (absolutePaths.length === 0) {
    fail([`no media files found in ${MEDIA_DIRECTORY}`]);
  }

  const files = await Promise.all(
    absolutePaths.map(async (absolutePath) => ({
      absolutePath,
      relativePath: path.relative(MEDIA_DIRECTORY, absolutePath),
      size: (await stat(absolutePath)).size,
    }))
  );
  const errors = (await Promise.all(files.map(checkFile))).flat();
  const totalBytes = files.reduce((total, file) => total + file.size, 0);

  if (totalBytes > TOTAL_MEDIA_LIMIT) {
    errors.push(
      `public/media totals ${formatBytes(totalBytes)} and exceeds the ${formatBytes(TOTAL_MEDIA_LIMIT)} budget.`
    );
  }

  const duplicates = await findDuplicates(files);
  const duplicateMessages = duplicates.map(
    (matches) => `byte-identical media: ${matches.join(', ')}`
  );

  if (process.env.BUILD_PROFILE === 'release') {
    errors.push(...duplicateMessages);
  } else {
    for (const message of duplicateMessages)
      console.warn(`Media check warning: ${message}`);
  }

  if (errors.length > 0) fail(errors);

  console.info(
    `Media check passed: ${files.length} files, ${formatBytes(totalBytes)} total.`
  );
}

await main();
