import assert from 'node:assert/strict';
import { execFile as execFileCallback } from 'node:child_process';
import { promisify } from 'node:util';
import test from 'node:test';

const execFile = promisify(execFileCallback);

test('repository media passes the build-time file check', async () => {
  await assert.doesNotReject(
    execFile(process.execPath, ['scripts/check-media.ts'])
  );
});
