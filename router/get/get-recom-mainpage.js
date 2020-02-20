var express = require('express');
var router = express.Router();
var recommend = require('../../service/select/get-recom-mainpage');
const fs = require('fs');
var partImage = require('../partImage');
var moment = require('moment'); moment.locale('th'); // เวลา

router.get('/', function (req, res, next) {
    // var data=req.body
    recommend.recommend((err, row) => {
        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].image1
            console.log(element);
            result.push(data = {
                recom_id: row[i].recom_id,
                pro_id: row[i].pro_id,
                pro_head: row[i].pro_head,
                pro_sell: row[i].pro_sell,
                pro_detail: row[i].pro_detail,
                pro_area: row[i].pro_area,
                pro_space: row[i].pro_space,
                price: row[i].price,
                pro_floor: row[i].pro_floor,
                pro_bedroom: row[i].pro_bedroom,
                pro_toilet: row[i].pro_toilet,
                pro_status: row[i].pro_status,
                pro_post: moment(row[i].pro_post, "YYYYMMDD").fromNow(),
                end_date: row[i].end_date,
                pro_views: row[i].pro_views,
                location_id: row[i].location_id,
                fname: row[i].fname,
                lname: row[i].lname,
                id_line: row[i].id_line,
                facebook: row[i].facebook,
                profile_pic: row[i].profile_pic,
                cus_detail: row[i].cus_detail,
                cus_status: row[i].cus_status,
                phone: row[i].phone,
                email_id: row[i].email_id,
                latitude: row[i].latitude,
                longtitude: row[i].longtitude,
                type_id: row[i].type_id,
                type_name: row[i].type_name,
                loc_name: row[i].loc_name,
                province_id: row[i].province_id,
                provin_name: row[i].provin_name,
                zone_name: row[i].zone_name,
                zone_id: row[i].zone_id,
                image1: fs.readFileSync(partImage.property + element, 'base64')
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