import { NextResponse } from 'next/server';

export function GET(request: Request) {
  const url = new URL('/events/deepstambh-2025', request.url);
  return NextResponse.redirect(url, { status: 308 });
}

export function HEAD(request: Request) {
  const url = new URL('/events/deepstambh-2025', request.url);
  return NextResponse.redirect(url, { status: 308 });
}
