require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_host,
  port: process.env.EMAIL_port,
  secure: process.env.EMAIL_secure, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_user,
    pass: process.env.EMAIL_pass,
  },
});

async function sendEmail(data) {
    try{
        const info = await transporter.sendMail({
            from: `UPX5 <${process.env.EMAIL_user}>`, // sender address
            to: data.to, // list of receivers
            subject: data.subject, // Subject line
            text: data.text, // plain text body
            html: data.html, // html body
          });
          return  info;
    }catch(err){
        console.log(err)
        return {error: "Erro na tentativa de envio de E-mail"}
    }
}

module.exports = { 
    sendEmail,
};