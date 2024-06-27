import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const { name, email, phone, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });
const from = process.env.USER_EMAIL;
const fname = 'Vinit Patel';
  const mailOption = {
       from: `${fname} <${email}>`,
    // from: process.env.USER_EMAIL,
    to: "vinitpatel2019@gmail.com",
    subject: 'Inquiry from Portfolio',
    html: `
        <center>
        <h1>Contact Form Inquiry</h1>
        </center>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `,
    // text: message,
    replyTo: email,
  };
  await transporter.sendMail(mailOption);
  return NextResponse.json({ message: "Mail Sent !", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Mail Not Sent !", status: 500 });
  }
}
