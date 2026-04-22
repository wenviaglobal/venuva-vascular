import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, website } = req.body;
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // 1. Bot Protection (Honeypot)
  if (website) {
    return res.status(200).json({ success: true, message: 'Message "sent" successfully' });
  }

  // 2. Security Check (Origin/Referer)
  const referer = req.headers.referer;
  const allowedOrigin = process.env.VITE_SITE_URL || 'venuvavascular.com';
  if (process.env.NODE_ENV === 'production' && referer && !referer.includes(allowedOrigin)) {
    return res.status(403).json({ error: 'Unauthorized origin' });
  }

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone are required' });
  }

  // 3. Phone Validation (Guard)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  // 1. Send Telegram Notification (CRITICAL & FAST)
  let telegramSuccess = false;
  if (botToken && chatId) {
    try {
      const cleanPhone = phone.replace(/\D/g, '');
      const message = `🏥 <b>New Appointment Booking</b>
    
👤 <b>Patient:</b> ${name}
📞 <b>Phone:</b> <a href="tel:${cleanPhone}">${phone}</a>
🌐 <b>Source:</b> Venuva Website

<i>Action required: Please call back the patient to confirm the slot.</i>`;

      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      });
      telegramSuccess = true;
    } catch (error) {
      console.error('Telegram Error:', error.response?.data || error.message);
    }
  }

  // 2. Trigger Email Backup (BACKGROUND - Don't wait for Gmail)
  (async () => {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.AUTH_USERNAME,
          pass: process.env.AUTH_PASSWOrD,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      const mailOptions = {
        from: `"Venuva Appointments" <${process.env.AUTH_USERNAME}>`,
        to: process.env.RECEIVER_MAIL || process.env.AUTH_USERNAME,
        subject: `🏥 NEW APPOINTMENT: ${name} (${phone})`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #005F56;">New Appointment Lead</h2>
            <p><strong>Patient Name:</strong> ${name}</p>
            <p><strong>Phone Number:</strong> <a href="tel:${phone}">${phone}</a></p>
            <hr />
            <p style="font-size: 12px; color: #666;">This lead was captured securely via the Venuva Vascular website.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Email Backup Error:', error.message);
    }
  })();

  return res.status(200).json({ 
    success: true, 
    message: 'Lead captured successfully',
    telegram: telegramSuccess
  });
}
