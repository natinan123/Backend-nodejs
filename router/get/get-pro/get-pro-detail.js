var express = require('express');
var router = express.Router();
var prodetail = require('../../../service/select/get-pro/get-pro-detail');
const fs = require('fs');
var partImage = require('../../partImage');
var moment = require('moment'); moment.locale('th'); // เวลา


router.get('/:pro_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.pro_id
    prodetail.prodetail(data, (err, row) => {




        var pro_id = row[0].pro_id;
        var pro_head = row[0].pro_head;
        var pro_sell = row[0].pro_sell;
        var pro_detail = row[0].pro_detail;
        var pro_area = row[0].pro_area;
        var pro_space = row[0].pro_space;
        var price = row[0].price;
        var pro_floor = row[0].pro_floor;
        var pro_bedroom = row[0].pro_bedroom;
        var pro_toilet = row[0].pro_toilet;
        var pro_status = row[0].pro_status;
        var pro_views = row[0].pro_views;
        var latitude = row[0].latitude;
        var longtitude = row[0].longtitude;
        var pro_post = moment(row[0].pro_post, "YYYYMMDD").fromNow();
        var end_date = moment(row[0].end_date, "YYYYMMDD").fromNow();
        var location_id = row[0].location_id;
        var type_id = row[0].type_id;
        var style_id = row[0].style_id;
        var style1 = row[0].style1;
        var style2 = row[0].style2;
        var style3 = row[0].style3;
        var style4 = row[0].style4;
        var style5 = row[0].style5;
        var style6 = row[0].style6;
        var style7 = row[0].style7;
        var style8 = row[0].style8;
        var style9 = row[0].style9;
        var style10 = row[0].style10;
        var style11 = row[0].style11;
        var style12 = row[0].style12;
        var style13 = row[0].style13;
        var style14 = row[0].style14;
        var style15 = row[0].style15;
        var style16 = row[0].style16;
        var style17 = row[0].style17;
        var style18 = row[0].style18;
        var style19 = row[0].style19;
        var style20 = row[0].style20;
        var email_id = row[0].email_id;
        var fname = row[0].fname;
        var lname = row[0].lname;
        var id_line = row[0].id_line;
        var facebook = row[0].facebook;
        var cus_detail = row[0].cus_detail;
        var phone = row[0].phone;
        var loc_name = row[0].loc_name;
        var type_name = row[0].type_name;
        var province_id = row[0].province_id;
        var provin_name = row[0].provin_name;
        var zone_id = row[0].zone_id;
        var zone_name = row[0].zone_name;
        var profile_pic = fs.readFileSync(partImage.avatar + row[0].profile_pic, 'base64');
        var result = [{
            pro_id,
            pro_head,
            pro_sell,
            pro_detail,
            pro_area,
            pro_space,
            price,
            pro_floor,
            pro_bedroom,
            pro_toilet,
            pro_status,
            pro_views,
            latitude,
            longtitude,
            pro_post,
            end_date,
            location_id,
            type_id,
            style_id,
            style1,
            style2,
            style3,
            style4,
            style5,
            style6,
            style7,
            style8,
            style9,
            style10,
            style11,
            style12,
            style13,
            style14,
            style15,
            style16,
            style17,
            style18,
            style19,
            style20,
            email_id,
            fname,
            lname,
            id_line,
            facebook,
            cus_detail,
            phone,
            loc_name,
            type_name,
            province_id,
            provin_name,
            zone_id,
            zone_name,
            profile_pic,

        }]



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
