var express = require('express');
var router = express.Router();
var partImage = require('../../partImage');

var artdetail = require('../../../service/select/get-article/get-art-detial');
const fs = require('fs');

router.get('/:article_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.article_id
    artdetail.artdetail(data, (err, row) => {



        if (row[0].art_pic1 != 'undefined') {
            var pro1 = row[0].art_pic1;
            var art_pic1 = fs.readFileSync(partImage.advertise + pro1, 'base64');
        }
        if (row[0].art_pic2 != 'undefined') {
            var pro2 = row[0].art_pic2;
            var art_pic2 = fs.readFileSync(partImage.advertise + pro2, 'base64');

        }
        if (row[0].art_pic3 != 'undefined') {
            var pro3 = row[0].art_pic3;
            var art_pic3 = fs.readFileSync(partImage.advertise + pro3, 'base64');
        }

        var article_id = row[0].article_id;
        var articl_head = row[0].articl_head;
        var art_detail1 = row[0].art_detail1;
        var art_detail2 = row[0].art_detail2;
        var art_type = row[0].art_type;
        var art_date = row[0].art_date;
        var art_view = row[0].art_vie;

        var result = [{
            article_id,
            articl_head,
            art_detail1,
            art_detail2,
            art_pic1,
            art_pic2,
            art_pic3,
            art_type,
            art_date,
            art_view,
        }]

        // console.log(result);
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }


    })
});
module.exports = router;