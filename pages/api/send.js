import nodemailer from "nodemailer";

export default function handler(request, response) {
  const body = request?.body;

  let transorter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
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

  transorter.sendMail(message, (err, info) => {
    err && console.log(err);
    info && console.log(info);
  });

  return response.send("Good things come to those who wait.");
}
