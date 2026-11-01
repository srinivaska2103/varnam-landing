
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure live GoDaddy/secureserver SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER || 'noreply@vexatech.in',
    pass: process.env.SMTP_PASS || 'Srini@2103',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, studioName, plan, message } = body;

    // Validate essential fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    const targetRecipient = 'vexatech.connect@gmail.com';
    const emailSubject = `[VARNAM Lead] New Inquiry: ${name} (${plan || 'General'})`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #f0e5da; border-radius: 12px; background-color: #fffdf9;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #ff6b00;">
          <h2 style="color: #1f2937; margin: 0; font-size: 24px;">VARNAM Studio Inquiry</h2>
          <p style="color: #ff6b00; font-size: 13px; font-weight: bold; margin-top: 4px; text-transform: uppercase;">
            Live Website Lead Received
          </p>
        </div>

        <div style="padding: 20px 0;">
          <h3 style="color: #1f2937; font-size: 16px; margin-bottom: 12px;">Client Details:</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px; font-weight: bold;">Client Name:</td>
              <td style="padding: 8px 0; color: #1f2937; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #1f2937; font-weight: bold;"><a href="tel:${phone}" style="color: #ff6b00; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #1f2937;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Studio Name:</td>
              <td style="padding: 8px 0; color: #1f2937;">${studioName || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Interested Plan:</td>
              <td style="padding: 8px 0; color: #ff6b00; font-weight: bold;">${plan || 'Not specified'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 14px; background-color: #fff8f0; border-left: 4px solid #ff6b00; border-radius: 6px;">
            <strong style="color: #1f2937; font-size: 13px; text-transform: uppercase; display: block; margin-bottom: 6px;">
              Requirements / Message:
            </strong>
            <p style="color: #4b5563; font-size: 14px; margin: 0; line-height: 1.5; white-space: pre-wrap;">
              ${message || 'No additional message provided.'}
            </p>
          </div>
        </div>

        <div style="padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
          <p style="margin: 0;">Dispatched from VARNAM Marketing Landing Page (<a href="https://varnam.vexatech.in" style="color: #ff6b00;">varnam.vexatech.in</a>)</p>
          <p style="margin: 4px 0 0;">Platform operated by VEXA TECH • Madurai, Tamil Nadu</p>
        </div>
      </div>
    `;

    const textContent = `
New VARNAM Bridal Studio Inquiry:

Client Name: ${name}
Phone / WhatsApp: ${phone}
Email Address: ${email}
Studio / Brand Name: ${studioName || 'Not specified'}
Interested Plan: ${plan || 'Not specified'}

Requirements / Notes:
${message || 'No additional notes provided.'}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Source: https://varnam.vexatech.in
    `.trim();

    // Send actual email via SMTP
    const info = await transporter.sendMail({
      from: '"VARNAM Studio Inquiries" <noreply@vexatech.in>',
      to: targetRecipient,
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    console.log(`[SMTP Email Success] Message sent to ${targetRecipient}:`, info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Inquiry received and delivered to vexatech.connect@gmail.com',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('[SMTP Email Error]:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to send inquiry email.' },
      { status: 500 }
    );
  }
}
