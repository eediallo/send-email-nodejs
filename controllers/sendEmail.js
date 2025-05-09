import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";

export const sendEmailEthereal = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "alivia.farrell@ethereal.email",
      pass: "Nj9d3Y8brWrttBKyYj",
    },
  });

  let info = await transporter.sendMail({
    from: '"Daniel Hall" <daniel@gmail.com>',
    to: "bare@example.com",
    subject: "Test Email",
    html: "<b>Sending emails with NodeJs</b>", // HTML body
  });

  res.json(info);
};

export const sendEmail = async (req, res) => {
  // req is unused but required for the route handler
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "elhhabdouldiallo@gmail.com", // Change to your recipient
    from: "englishopps2022@gmail.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  try {
    const info = await sgMail.send(msg);
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
