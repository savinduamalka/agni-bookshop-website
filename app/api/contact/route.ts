import { NextResponse } from 'next/server';
// Force the route to run in the Node.js runtime (Prisma is not Edge-compatible)
export const runtime = 'nodejs';
let prisma: any;
type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const service = payload.service?.trim() || 'General Inquiry';
  const message = payload.message?.trim() ?? '';

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: 'Please fill in all required fields' },
      { status: 422 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email' },
      { status: 422 }
    );
  }
  if (message.length < 3) {
    return NextResponse.json(
      {
        error: 'Message should be a little more descriptive (min 3 characters)',
      },
      { status: 422 }
    );
  }
  // Ensure MongoDB connection string is available and includes a database
  const mongoUrl = process.env.MONGODB_URI;
  if (!mongoUrl) {
    return NextResponse.json(
      { error: 'MONGODB_URI is not configured in the environment' },
      { status: 500 }
    );
  }
  // basic check for a database name in the connection string (after the host and slash)
  const hasDbName = /mongodb(?:\+srv)?:\/\/[^/]+\/(.+)/.test(mongoUrl);
  if (!hasDbName) {
    return NextResponse.json(
      {
        error: 'MONGODB_URI must include a database name (e.g. /agni-bookshop)',
      },
      { status: 500 }
    );
  }

  // Lazy-import Prisma client so builds that analyze/compile routes don't
  // attempt to connect to the database at build time. Wrap import in
  // try/catch so any import-time errors return a JSON error instead of
  // an empty 500 response.
  if (!prisma) {
    try {
      // Use a relative import path so the runtime doesn't depend on
      // TS path aliases which may not be resolved the same way at runtime
      // on Vercel. Relative path: from `app/api/contact/route.ts` to `lib/prisma`.
      const mod = await import('../../../lib/prisma');
      prisma = mod.default ?? (mod.prisma as any) ?? mod;
    } catch (err: any) {
      console.error(
        'Failed to load Prisma client:',
        err?.message ?? err,
        err?.stack ?? 'no-stack'
      );
      return NextResponse.json(
        { error: 'Server error loading database client' },
        { status: 500 }
      );
    }
  }

  try {
    const record = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        service,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: record.id,
          createdAt: record.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      'Failed to save contact message:',
      error?.message ?? error,
      error?.stack ?? 'no-stack'
    );
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
