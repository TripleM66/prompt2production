import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Wachtwoord voor concept website
const CONCEPT_PASSWORD = process.env.CONCEPT_PASSWORD || '';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password === CONCEPT_PASSWORD) {
      // Set authentication cookie
      const cookieStore = await cookies();
      cookieStore.set('p2p-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
