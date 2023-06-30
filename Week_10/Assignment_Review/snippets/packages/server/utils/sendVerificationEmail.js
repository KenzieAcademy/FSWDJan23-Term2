import nodemailer from "nodemailer";
import keys from "../config/keys";

export default async function sendVerificationEmail(email, verificationCode) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nodemailer.test.kenzie@gmail.com",
      pass: keys.app.emailPassword,
    },
  });

  const mailOptions = {
    from: "noreply@snippets.com",
    to: email,
    subject: "Welcome to snippets!",
    html: `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body style="font-family: sans-serif;">
        <div style="display: block; margin: auto; max-width: 600px;" class="main">
          <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Welcome to Snippets!</h1>
          <p>This email will grant you access to your Snippets account!</p>
          <img alt="Inspect with Tabs" src="cid:welcome.png" style="width: 100%;">
          <p><a href="http://localhost:3001/api/auth/verify/${verificationCode}">Click here</a> to verify your email address.</p>
        </div>
      </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
