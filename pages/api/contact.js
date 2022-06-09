export default (req, res) => {
    let nodemailer = require('nodemailer')
    require('dotenv').config()

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST_APTRASCO, // mail.aptrasco.com
        port: process.env.MAIL_PORT, // 465
        auth: {
            user: process.env.MAIL_ADDRESS_APTRASCO,
            pass: process.env.PASSWORD_APTRASCO
        },
        secureConnection: false, // TLS requires secureConnection to be false
        tls: {
            rejectUnauthorized: true,
            minVersion: "TLSv1.2"
        }
    });

    const mailData = {
        from: '"Aptrasco Contact Form" <noreply@aptrasco.com>', // change to noreply@aptrasco.com
        to: 'joevandelft@gmail.com', // change to info@aptrasco.com
        subject: `You have a new contact request from ${req.body.firstname} ${req.body.lastname}`,
        text: req.body.enquiry,
        html: `
        <p>${req.body.firstname} ${req.body.lastname} has visited 
        the Aptrasco.com website and would like to be either contacted on ${req.body.phone} or by E-mail: ${req.body.email}</p></br>
        <p>He or she has heard about us via ${req.body.hear}, and is interested in ${req.body.industry}.</p></br>
        <p>His/her enquiry is as follows:</p>
        <p>${req.body.enquiry}</p>
        `
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            return console.log(`transporter error ${err}`)
        else
            return
        // console.log(info)
    })
    return res.status(200).end()
};