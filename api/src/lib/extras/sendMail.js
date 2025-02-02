import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 465,
    secure: true, // true for port 465, false for others
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendMail = (options, timeOut)=>{

    setTimeout(async ()=>{
        await transporter.sendMail({
            from: options.from,
            to: options.to,
            header:{
                'priority': options.priority || "normal",
            },
            subject: options.subject,
            text: options.text,
            html: options.html,
        });
    }, timeOut)
}

export default sendMail;