var express = require('express');
var router = express.Router();
var partImage = require('../../partImage');
var article = require('../../../service/select/get-article/get-art');
const fs = require('fs');
var moment = require('moment'); moment.locale('th'); // เวลา

router.get('/', function (req, res, next) {
    // var data=req.body
    article.article((err, row) => {
        let result = []
        for (let i = 0; i < row.length; i++) {

            if (row[i].art_pic1 != 'undefined') {
                var element1 = row[i].art_pic1;
            }
            if (row[i].art_pic2 != 'undefined') {
                var element2 = row[i].art_pic2;
            }
            if (row[i].art_pic3 != 'undefined') {
                var element3 = row[i].art_pic3;
            }

            // console.log(element);
            result.push(data = {
                pro_id: row[i].pro_id,
                article_id: row[i].article_id,
                articl_head: row[i].articl_head,
                art_detail1: row[i].art_detail1,
                art_detail2: row[i].art_detail2,
                art_type: row[i].art_type,
                art_date: moment(row[i].art_date, "YYYYMMDD").fromNow(),
                art_view: row[i].art_view,
                art_pic1: fs.readFileSync(partImage.advertise + element1, 'base64'),
                art_pic2: fs.readFileSync(partImage.advertise + element2, 'base64'),
                art_pic3: fs.readFileSync(partImage.advertise + element3, 'base64')
            })
            // console.log(result)
        }

        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }


    })
});
module.exports = router;