import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message, website } = req.body;

  // 1. Bot Protection (Honeypot)
  if (website) {
    return res.status(200).json({ success: true, message: 'Email sent successfully' }); // Quietly reject
  }

  // 2. Security Check (Origin/Referer)
  const referer = req.headers.referer;
  const allowedOrigin = process.env.VITE_SITE_URL || 'venuvavascular.com';
  if (process.env.NODE_ENV === 'production' && referer && !referer.includes(allowedOrigin)) {
    return res.status(403).json({ error: 'Unauthorized origin' });
  }

  // 3. Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message)' });
  }

  // 4. Phone Validation (Guard)
  if (phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return res.status(400).json({ error: 'Invalid phone number format' });
    }
  }

  try {
    // 3. Configure Transporter using existing .env names
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // True for 465, false for 587
      auth: {
        user: process.env.AUTH_USERNAME,
        pass: process.env.AUTH_PASSWOrD,
      },
      tls: {
        rejectUnauthorized: false // Helps with some hosting providers
      }
    });

    // 4. Build a high-quality HTML template (Matched to Venuva Branding)
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #005F56; padding: 30px; text-align: center; border-bottom: 4px solid #F59E0B;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Venuva Vascular Center</h1>
          <p style="color: #B2D1CE; margin: 5px 0 0; font-size: 12px; letter-spacing: 1px;">NEW PATIENT INQUIRY</p>
        </div>
        <div style="padding: 30px; background-color: white;">
          <h2 style="color: #005F56; font-size: 20px; margin-top: 0;">Inquiry Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 100px;">Name</td>
              <td style="padding: 10px 0; color: #1e1b4b; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Email</td>
              <td style="padding: 10px 0; color: #0891B2; font-weight: bold;"><a href="mailto:${email}" style="color: #0891B2; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Phone</td>
              <td style="padding: 10px 0; color: #1e1b4b; font-weight: bold;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Subject</td>
              <td style="padding: 10px 0; color: #1e1b4b;">${subject || 'General Inquiry'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #F8FAFC; border-left: 4px solid #F59E0B; border-radius: 4px;">
            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">Message</p>
            <p style="margin: 0; color: #334155; line-height: 1.6;">${message}</p>
          </div>
        </div>
        <div style="background-color: #F8FAFC; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          <p>This inquiry was sent from the Venuva Vascular contact form.</p>
        </div>
      </div>
    `;

    // 5. Email Options
    const mailOptions = {
      from: `"Venuva Website" <${process.env.AUTH_USERNAME}>`,
      to: process.env.RECEIVER_MAIL || process.env.AUTH_USERNAME,
      subject: `New Patient Inquiry: ${subject || 'Website Lead'} - From ${name}`,
      html: emailHtml,
      replyTo: email,
    };

    // 6. Send
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('SMTP Error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message
    });
  }
}
