var express = require('express');
var router = express.Router();

// main.js
const nodemailer = require('nodemailer');

// setup mail transporter service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'rmuttproperty@gmail.com', // your email
        // pass: 'cpe58346'              // your password
        user: 'natinan30@gmail.com', // your email
        pass: '180040022'              // your password
    }
});

router.post('/', function (req, res, next) {
    var email_id = req.body.username;
    var link = 'http://localhost:4200/mainpage/verify' ;

    console.log(email_id);
    // setup email data with unicode symbols
    const mailOptions = {
        from: 'rmuttproperty@gmail.com',              // sender
        to: email_id,              // list of receivers
        subject: 'Hello from sender',            // Mail subject
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"

    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });



    res.status(200).json({
        "status": "success",
        "code": "200",
        "message": "Send email successfully",
    });
});





module.exports = router;