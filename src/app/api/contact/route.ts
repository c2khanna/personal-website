import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const { name, email, message, number } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured yet. Please try again later.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_EMAIL || 'chaitanyakhanna13@gmail.com';
    const fromSender = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <contact@chaitanyakhanna.me>';

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #5a009d; padding-bottom: 10px;">
          New Message from Portfolio Website
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #555;">Name:</td>
            <td style="padding: 8px 0; color: #111;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0; color: #111;">
              <a href="mailto:${escapeHtml(email)}" style="color: #5a009d;">${escapeHtml(email)}</a>
            </td>
          </tr>
          ${
            number?.trim()
              ? `<tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 8px 0; color: #111;">${escapeHtml(number)}</td>
                </tr>`
              : ''
          }
        </table>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #5a009d;">
          <h4 style="margin-top: 0; margin-bottom: 8px; color: #333;">Message:</h4>
          <p style="margin: 0; white-space: pre-wrap; color: #444; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
        <p style="font-size: 12px; color: #888; margin-top: 25px; border-top: 1px solid #eee; padding-top: 10px;">
          Sent from your personal website contact form
        </p>
      </div>
    `;

    const replyEmail = email.trim();

    const { data, error } = await resend.emails.send({
      from: fromSender,
      to: [toEmail],
      replyTo: [replyEmail],
      headers: {
        'Reply-To': replyEmail,
      },
      subject: `New Inquiry from ${name.trim()} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${number || 'N/A'}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send message via Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error in contact API:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
