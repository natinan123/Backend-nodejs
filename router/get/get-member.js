var express = require('express');
var router = express.Router();
var member = require('../../service/select/get-member');
var partImage = require('../partImage');
var moment = require('moment'); moment.locale('th'); // เวลา
const fs = require('fs');

router.get('/', function (req, res, next) {
    // var data=req.body
    member.member((err, row) => {
        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].profile_pic
            console.log(element);
            result.push(data = {
                email_id: row[i].email_id,
                countPro: row[i].countPro,
                fname: row[i].fname,
                lname: row[i].lname,
                id_line: row[i].id_line,
                facebook: row[i].facebook,
                cus_detail: row[i].cus_detail,
                cus_status: row[i].cus_status,
                phone: row[i].phone,
                profile_pic: fs.readFileSync(partImage.avatar + element, 'base64')
            })
            // console.log(result)
        }



        if (err) {
            res.json(err);
        }
        else {

            res.json(
                result

            );
        }


    })
});
module.exports = router;