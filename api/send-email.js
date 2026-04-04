import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import Email, { ContactEmail } from '../src/components/utils/Email';



export default async function handler(req,res){
    if (req.method !== 'POST') return res.status(405).end();

    const {name, email, phone, subject, message}=req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.VITE_SITE_URL,
            port: VITE_SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.VITE_AUTH_USERNAME,
                pass: VITE_AUTH_PASSWOrD
            }
        })

        const emailhtml=await render(
            <Email
            name={name}
            email={email}
            phone={phone}
            subject={subject}
            message={message}
            />
        );

        const options = {
            from: `Venuva Vascular Center, ${process.env.VITE_AUTH_USERNAME}`,
            to: process.env.VITE_RECEIVER_MAIL,
            subject: `New Patient Enquiry ${subject}`,
            html: emailhtml
        }


        await transporter.sendMail(options)

        res.status(200).json({sucess : true})
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}
