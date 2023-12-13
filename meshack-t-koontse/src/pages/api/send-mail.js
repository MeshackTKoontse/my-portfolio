var nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

export default async function handler(req, res) {
  const mail = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.emailPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOption = {
    from: mail.email,
    to: process.env.email,
    subject: `FROM ${mail.name} email: ${mail.email} - ${mail.subject}`,
    text: mail.message,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOption, (err, success) => {
      if (err) {
        console.log(err);
        // hello
      } else {
        console.log(success);
        return true;
      }
    });
  });

  res.status(200).json("hello");
}
