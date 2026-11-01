import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Transporter using secureserver/GoDaddy SMTP
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

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    const applicantName = formData.get('applicantName')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const position = formData.get('position')?.toString().trim();
    const experienceLevel = formData.get('experienceLevel')?.toString().trim();
    const totalExperience = formData.get('totalExperience')?.toString().trim() || '';
    const location = formData.get('location')?.toString().trim();
    const education = formData.get('education')?.toString().trim();
    const linkedinUrl = formData.get('linkedinUrl')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    const consent = formData.get('consent');
    const resumeFile = formData.get('resume');

    // 1. Validate required text fields
    if (!applicantName || !email || !phone || !position || !experienceLevel || !location || !education) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    if (consent !== 'true' && consent !== true) {
      return NextResponse.json(
        { success: false, error: 'You must confirm the consent checkbox before submitting.' },
        { status: 400 }
      );
    }

    if (experienceLevel === 'Experienced' && !totalExperience) {
      return NextResponse.json(
        { success: false, error: 'Total experience is required for experienced candidates.' },
        { status: 400 }
      );
    }

    // 2. Validate resume upload
    if (!resumeFile || typeof resumeFile === 'string') {
      return NextResponse.json(
        { success: false, error: 'A PDF resume file is required.' },
        { status: 400 }
      );
    }

    // File name and MIME validation
    const originalFileName = resumeFile.name || 'resume.pdf';
    const isPdfExt = originalFileName.toLowerCase().endsWith('.pdf');
    const isPdfMime = resumeFile.type === 'application/pdf' || resumeFile.type === 'application/x-pdf';

    if (!isPdfExt && !isPdfMime) {
      return NextResponse.json(
        { success: false, error: 'Only PDF format (.pdf) is permitted for resume upload.' },
        { status: 400 }
      );
    }

    // Max file size: 5MB
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.length > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'Resume file size exceeds the 5MB limit.' },
        { status: 400 }
      );
    }

    // Basic PDF magic number check (%PDF-)
    const pdfHeader = buffer.slice(0, 5).toString('ascii');
    if (!pdfHeader.startsWith('%PDF')) {
      return NextResponse.json(
        { success: false, error: 'The uploaded file does not appear to be a valid PDF document.' },
        { status: 400 }
      );
    }

    // 3. Persistent Local Storage
    const timestamp = new Date().toISOString();
    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Ensure uploads and data directories exist
    const uploadsDir = path.join(process.cwd(), 'data', 'resumes');
    const recordsDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Sanitize filename
    const safeBaseName = originalFileName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const savedFileName = `${applicationId}_${safeBaseName}`;
    const savedFilePath = path.join(uploadsDir, savedFileName);

    try {
      fs.writeFileSync(savedFilePath, buffer);
    } catch (saveErr) {
      console.error('Failed to save resume file to disk:', saveErr);
    }

    const applicationRecord = {
      id: applicationId,
      applicantName,
      email,
      phone,
      position,
      experienceLevel,
      totalExperience: experienceLevel === 'Experienced' ? totalExperience : 'N/A (Fresher)',
      location,
      education,
      linkedinUrl,
      message,
      consent: true,
      resumeFileName: originalFileName,
      savedFilePath,
      fileSize: buffer.length,
      applicationStatus: 'NEW',
      createdAt: timestamp,
      updatedAt: timestamp,
      emailSent: false,
      emailError: null,
    };

    // Store in JSON database
    const dbFilePath = path.join(recordsDir, 'job-applications.json');
    let applications = [];
    try {
      if (fs.existsSync(dbFilePath)) {
        const fileData = fs.readFileSync(dbFilePath, 'utf8');
        applications = JSON.parse(fileData);
      }
    } catch {
      applications = [];
    }

    // 4. Send Email to vexatech.connect@gmail.com
    const targetRecipient = process.env.CAREERS_EMAIL_RECIPIENT || 'vexatech.connect@gmail.com';
    const emailSubject = `New Job Application – ${position} – ${applicantName}`;

    const formattedDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 28px; border: 1px solid #fed7aa; border-radius: 16px; background-color: #ffffff;">
        <div style="border-bottom: 3px solid #ff6b00; padding-bottom: 20px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.1em; color: #ff6b00; text-transform: uppercase;">
              VARNAM CAREERS SYSTEM
            </span>
            <h1 style="color: #1f2937; margin: 6px 0 0; font-size: 22px; font-weight: 700;">
              New Job Application Received
            </h1>
          </div>
        </div>

        <div style="background-color: #fff8f0; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; border: 1px solid #ffedd5;">
          <p style="margin: 0; font-size: 15px; color: #1f2937;">
            <strong>Target Role:</strong> <span style="color: #ff6b00; font-weight: 700;">${position}</span>
          </p>
          <p style="margin: 4px 0 0; font-size: 13px; color: #6b7280;">
            Application Reference ID: <strong>${applicationId}</strong>
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; width: 180px; font-weight: 600;">Applicant Name</td>
              <td style="padding: 10px 0; color: #111827; font-weight: 700;">${applicantName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Email Address</td>
              <td style="padding: 10px 0; color: #111827;">
                <a href="mailto:${email}" style="color: #ff6b00; text-decoration: none; font-weight: 600;">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Mobile Number</td>
              <td style="padding: 10px 0; color: #111827;">
                <a href="tel:${phone}" style="color: #ff6b00; text-decoration: none; font-weight: 600;">${phone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Experience Level</td>
              <td style="padding: 10px 0; color: #111827; font-weight: 600;">
                <span style="display: inline-block; padding: 2px 10px; background-color: ${experienceLevel === 'Fresher' ? '#ecfdf5' : '#eff6ff'}; color: ${experienceLevel === 'Fresher' ? '#047857' : '#1d4ed8'}; border-radius: 9999px; font-size: 12px;">
                  ${experienceLevel}
                </span>
              </td>
            </tr>
            ${
              experienceLevel === 'Experienced'
                ? `
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Total Experience</td>
              <td style="padding: 10px 0; color: #111827; font-weight: 600;">${totalExperience}</td>
            </tr>
            `
                : ''
            }
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Current Location</td>
              <td style="padding: 10px 0; color: #111827;">${location}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Highest Qualification</td>
              <td style="padding: 10px 0; color: #111827;">${education}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">LinkedIn Profile</td>
              <td style="padding: 10px 0; color: #111827;">
                ${
                  linkedinUrl
                    ? `<a href="${linkedinUrl.startsWith('http') ? linkedinUrl : 'https://' + linkedinUrl}" target="_blank" style="color: #0284c7; text-decoration: underline;">${linkedinUrl}</a>`
                    : '<span style="color: #9ca3af;">Not provided</span>'
                }
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Attached Resume</td>
              <td style="padding: 10px 0; color: #111827; font-weight: 600;">
                📎 ${originalFileName} (${(buffer.length / 1024).toFixed(1)} KB)
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600;">Submitted At</td>
              <td style="padding: 10px 0; color: #4b5563; font-size: 13px;">${formattedDate} (IST)</td>
            </tr>
          </tbody>
        </table>

        ${
          message
            ? `
        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin: 0 0 8px;">
            Why the candidate wants to join VARNAM:
          </h3>
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px 16px; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
        `
            : ''
        }

        <div style="border-top: 1px solid #f3f4f6; padding-top: 20px; text-align: center; font-size: 12px; color: #9ca3af;">
          <p style="margin: 0;">Dispatched automatically by VARNAM Recruitment Portal</p>
          <p style="margin: 4px 0 0;">Website: <a href="https://varnam.vexatech.in" style="color: #ff6b00; text-decoration: none;">varnam.vexatech.in</a> • Operations: Madurai, Tamil Nadu</p>
        </div>
      </div>
    `;

    const textContent = `
New Job Application Received - VARNAM

Position: ${position}
Applicant Name: ${applicantName}
Email: ${email}
Mobile Number: ${phone}
Experience Level: ${experienceLevel}
Total Experience: ${experienceLevel === 'Experienced' ? totalExperience : 'Fresher'}
Current Location: ${location}
Highest Educational Qualification: ${education}
LinkedIn Profile: ${linkedinUrl || 'Not provided'}
Resume: Attached (${originalFileName})

Why join VARNAM:
${message || 'None provided'}

Submitted At: ${formattedDate}
Application ID: ${applicationId}
    `.trim();

    // Send the email with the attached PDF
    let mailSuccess = false;
    let mailErrorMsg = null;

    try {
      const mailOptions = {
        from: `"VARNAM Careers" <${process.env.SMTP_USER || 'noreply@vexatech.in'}>`,
        replyTo: email,
        to: targetRecipient,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
        attachments: [
          {
            filename: originalFileName,
            content: buffer,
            contentType: 'application/pdf',
          },
        ],
      };

      const info = await transporter.sendMail(mailOptions);
      mailSuccess = true;
      console.log('Careers email sent successfully:', info.messageId);
    } catch (mailErr) {
      mailErrorMsg = mailErr?.message || 'SMTP delivery failed';
      console.error('Failed to send careers email:', mailErr);
    }

    // Save final status in application record
    applicationRecord.emailSent = mailSuccess;
    applicationRecord.emailError = mailErrorMsg;
    applications.push(applicationRecord);

    try {
      fs.writeFileSync(dbFilePath, JSON.stringify(applications, null, 2));
    } catch (writeErr) {
      console.error('Failed to update applications database file:', writeErr);
    }

    return NextResponse.json({
      success: true,
      applicationId,
      message:
        'Thank you for your interest in VARNAM! Your application has been submitted successfully. Our recruitment team will review your profile and contact you if your application is shortlisted.',
    });
  } catch (error) {
    console.error('Careers application API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'An unexpected error occurred while processing your application. Please try again.',
      },
      { status: 500 }
    );
  }
}
