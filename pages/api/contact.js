export default (req, res) => {
    let nodemailer = require('nodemailer')
    require('dotenv').config()

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST, // mail.ocunapse.com
        port: process.env.MAIL_PORT, // 465
        auth: {
            user: process.env.MAIL_ADDRESS_TEST,
            pass: process.env.PASSWORD
        },
        secureConnection: false, // TLS requires secureConnection to be false
        tls: {
            rejectUnauthorized: true,
            minVersion: "TLSv1.2"
        }
    });

    const mailData = {
        from: '"Aptrasco Contact Form" <jochgem@ocunapse.com>',
        to: 'joevandelft@gmail.com', // info@aptrasco.com
        subject: `You have a new contact request from ${req.body.firstname} ${req.body.lastname}`,
        text: req.body.enquiry,
        html: `
        <p>${req.body.firstname} ${req.body.lastname} has visited 
        the Aptrasco.com website and would like to be either contacted on ${req.body.phone} or by E-mail: ${req.body.email}</p></br>
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