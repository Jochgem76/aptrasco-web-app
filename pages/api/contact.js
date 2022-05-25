export default function (req, res) {
    let nodemailer = require('nodemailer')
    require('dotenv').config()

    const PASSWORD = process.env.password;

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'joevandelft@gmail.com',
            pass: PASSWORD
        },
        secure: true,
    });
    console.log(req.body.enquiry)

    const mailData = {
        from: 'joevandelft@gmail.com',
        to: 'joevandelft@gmail.com',
        subject: `Message From ${req.body.firstname} ${req.body.lastname}`,
        text: req.body.enquiry,
        html: <div>{req.body.enquiry}</div>
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}