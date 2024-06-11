"use server";
import nodemailer from "nodemailer";

export async function emailHandleSubmit(formData: FormData) {
  const name = formData.get("fullNameInput");
  const email = formData.get("emailInput");
  const subject = formData.get("subjectInput");
  const message = formData.get("contentInput");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to: "contactchfloors@gmail.com",
    subject: `${subject}`,
    text: `Email: ${email}\nName: ${name} \n\n ${message}`,
    replyTo: `${email}`,
  });
}
