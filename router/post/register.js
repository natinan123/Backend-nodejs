var express = require('express');
var router = express.Router();
var register = require('../../service/insert/register');

// main.js
const nodemailer = require('nodemailer');
var link = 'http://localhost:4200/mainpage/mainpage/home'

router.post('/', function (req, res, next) {

    
    // setup mail transporter service
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'RMUTTproperty@gmail.com', // your email
            pass: 'cpe58346'              // your password
        }
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: 'RMUTTproperty@gmail.com',              // sender
        to: 'natinan40@gmail.com',              // list of receivers
        subject: 'Hello from sender',            // Mail subject
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
       
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

    var data = req.body
    console.log(data);
    register.register(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;