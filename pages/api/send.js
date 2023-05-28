import nodemailer from "nodemailer";

export default function handler(request, response) {
  const body = request?.body;

  let transporter = nodemailer.createTransport({
    service: "SendinBlue",
    auth: {
      user: "topher@stupendousweb.com",
      pass: process.env.SENDINBLUE_PASS,
    },
  });

  let message = {
    from: "topher@stupendousweb.com",
    to: "topher@stupendousweb.com",
    subject: "New Development Lead!",
    text: `Email: ${body?.email}\n\r\nMessage: ${body?.message}`,
  };

  transporter
    .sendMail(message)
    .then(() => response.send("Good things come to those who wait."))
    .catch((error) => {
      console.log(error);
      response.status(422).send(error);
    });
}
