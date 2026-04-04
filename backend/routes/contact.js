import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address, service, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email required' });
    }

    // Save to MongoDB
    const record = { name, email, phone, address, service, message, createdAt: new Date() };
    await req.db.collection('contacts').insertOne(record);

    // Send email notification
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.NOTIFY_EMAIL || 'info@owenhvac.ca',
        subject: `New Contact: ${name} — ${service || 'General'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Address:</strong> ${address || 'N/A'}</p>
          <p><strong>Service:</strong> ${service || 'N/A'}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
          <hr>
          <p style="color:#888;font-size:12px;">Sent from owenhvac.ca contact form</p>
        `,
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Contact error:', err.message);
    res.status(500).json({ error: 'Failed to submit' });
  }
});

export default router;
