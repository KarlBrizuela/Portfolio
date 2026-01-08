import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 2. Define email options
    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: `New contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(JSON.stringify({ message: "Failed to send email.", error: err.message }), {
      status: 500,
    });
  }
}
