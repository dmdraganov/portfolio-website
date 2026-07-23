import { NextResponse } from 'next/server';

const sourceCommit = process.env.SOURCE_COMMIT ?? 'development';

export function GET() {
  return NextResponse.json(
    { status: 'ok', commit: sourceCommit },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
