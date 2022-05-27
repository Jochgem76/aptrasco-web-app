export default (req, res) => {
    let nodemailer = require('nodemailer')
    require('dotenv').config()

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST, // mail.ocunapse.com
        port: process.env.MAIL_PORT, // 143
        auth: {
            user: process.env.MAIL_ADDRESS,
            pass: process.env.PASSWORD
        },
        secureConnection: false, // TLS requires secureConnection to be false
        tls: {
            rejectUnauthorized: true,
            minVersion: "TLSv1.2"
        }
    });

    const mailData = {
        from: '"Nodemailer Contact" <jochgem@ocunapse.com>',
        to: 'joevandelft@gmail.com',
        subject: `You have a new contact request from ${req.body.firstname} ${req.body.lastname}`,
        text: req.body.enquiry,
        html: `
        <p>${req.body.firstname} ${req.body.lastname} has visited 
        the Aptrasco.com website and would like to be either contacted on ${req.body.phone} or by E-mail: ${req.body.email}</p></br>
        <p>His enquiry is as follows:</p>
        <p>${req.body.enquiry}</p>
        `
    }

    transporter.sendMail(mailData, (err, info) => {
        if (err)
            return console.log(`transporter error ${err}`)
        else
            console.log(info)
    })
    res.status(200)
};