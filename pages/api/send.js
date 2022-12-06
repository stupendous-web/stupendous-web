import nodemailer from "nodemailer";

export default function handler(request, response) {
  const body = request?.body;

  let transorter = nodemailer.createTransport({
    service: "SendinBlue",
    auth: {
      user: process.env.SENDINBLUE_USER,
      pass: process.env.SENDINBLUE_PASS,
    },
  });

  let message = {
    from: "topher@stupendousweb.com",
    to: "topher@stupendousweb.com",
    subject: "New Lead!",
    text: `
        Name:
        ${body?.name}
        
        Email:
        ${body?.email}
        
        Values:
        ${body?.values}
        
        Communities:
        ${body?.communities}
        
        Product:
        ${body?.product}
        
        Action:
        ${body?.action}
        
        Culture:
        ${body?.culture}
        
        Tech:
        ${body?.tech}
       `,
  };

  transorter
    .sendMail(message)
    .then(() => response.send("Good things come to those who wait."))
    .catch((err) => {
      console.log(err);
      response.status(500).send(err);
    });
}
