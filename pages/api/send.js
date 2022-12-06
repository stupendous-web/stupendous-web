import sgMail from "@sendgrid/mail";

export default function handler(request, response) {
  const body = request?.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail
    .send({
      to: "topher@stupendousweb.com",
      from: "topher@stupendousweb.com",
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
    })
    .then(() => {
      return response.send("Good things come to those who wait.");
    })
    .catch((error) => {
      return response.status(500).send(error);
    });
}
