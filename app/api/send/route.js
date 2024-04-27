import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import MessageUsEmail from '@/components/EmailMessage';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'User <ayush@ayushnainwal.live>', // your verified domain
        to: "iayush.n2@gmail.com", // the email address you want to send a message
      subject: `${name} wants to contact you`,
      react: MessageUsEmail({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}