import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

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
  } catch (error) {
    console.error('Failed to save contact message', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
