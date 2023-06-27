import nodemailer from "nodemailer";

export default function handler(request, response) {
  const {
    email,
    name,
    product,
    productBrief,
    marketReport,
    sEOReport,
    designGuide,
    projectPlan,
    estimate,
    other,
    note,
  } = request?.body;

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
    text: `Email: ${email}\n\r\nName: ${name}\n\r\nProduct Description: ${product}\n\r\nDELIVERABLES\n\r\nProduct Brief: ${productBrief}\n\r\nMarket Research Report: ${marketReport}\n\r\nSEO Research Report: ${sEOReport}\n\r\nDesign Guide: ${designGuide}\n\r\nSuggested Project Plan: ${projectPlan}\n\r\nIn-House Development Estimate: ${estimate}\n\r\nOther: ${other}\n\r\nNotes: ${note}`,
  };

  transporter
    .sendMail(message)
    .then(() => response.send("Good things come to those who wait."))
    .catch((error) => {
      console.log(error);
      response.status(422).send(error);
    });
}
