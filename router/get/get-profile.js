var express = require('express');
var router = express.Router();
var member = require('../../service/select/get-pro/get-profile');
var partImage = require('../partImage');
const fs = require('fs');

router.get('/:email_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.email_id
    member.member(data, (err, row) => {
        if (row[0].profile_pic != 'undefined') {
            var pro1 = row[0].profile_pic;
            var profile_pic = fs.readFileSync(partImage.avatar + pro1, 'base64');
        }

        var email_id = row[0].email_id;
        var password = row[0].password;
        var fname = row[0].fname;
        var lname = row[0].lname;
        var id_line = row[0].id_line;
        var facebook = row[0].facebook;
        var cus_detail = row[0].cus_detail;
        var cus_status = row[0].cus_status;
        var phone = row[0].phone;

        var result = [{
            email_id,
            password,
            fname,
            lname,
            id_line,
            facebook,
            profile_pic,
            cus_detail,
            cus_status,
            phone
        }]
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }


    })
});
module.exports = router;