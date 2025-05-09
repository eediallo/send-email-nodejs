import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
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
