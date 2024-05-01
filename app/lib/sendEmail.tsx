"use server";
import nodemailer from "nodemailer";

export async function emailHandleSubmit(formData: FormData) {
  const name = formData.get("fullNameInput");
  const email = formData.get("emailInput");
  const subject = formData.get("subjectInput");
  const message = formData.get("contentInput");

  console.log(name, email, subject, message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to: email as string,
    subject: `New message from ${name}: ${subject}`,
    text: message as string,
  });
}
