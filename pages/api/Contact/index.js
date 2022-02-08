const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  const { firstName, name, phone, email, message } = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'bfaidherbe31@gmail.com',
      pass: 'Baptou78350+',
    },
  });

  const text = `

    Prenom: ${firstName}\r\n
    Nom: ${name}\r\n
    Email: ${email}\r\n
    Telephone: ${phone}\r\n
    Message : ${message}\r\n
  `;

  const data = {
    to: 'bapt78@gmail.com',
    from: 'bfaidherbe31@gmail.com',
    subject: `${email} vient de vous envoyer un message`,
    text: text,
    html: text.replace(/\r\n/g, '<br />'),
  };

  smtpTransport.sendMail(data, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
