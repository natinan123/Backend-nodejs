var express = require('express');
var router = express.Router();
var packet = require('../../../service/select/get-require/get-packet-detail');
const fs = require('fs');
var partImage = require('../../partImage');
var moment = require('moment'); moment.locale('th'); // เวลา


router.get('/:pro_id', function (req, res, next) {
    // var data = req.body;
    var data = req.params

    console.log(data);
    packet.packet(data, (err, row) => {


        let result = []
        result = [{
            packet_id: row[0].packet_id,
            pro_id: row[0].pro_id,
            packet_date: moment(row[0].packet_date, "YYYYMMDD").fromNow(),
            pro_head: row[0].pro_head,
            pro_sell: row[0].pro_sell,
            pro_detail: row[0].pro_detail,
            pro_area: row[0].pro_area,
            pro_space: row[0].pro_space,
            price: row[0].price,
            pro_floor: row[0].pro_floor,
            pro_bedroom: row[0].pro_bedroom,
            pro_toilet: row[0].pro_toilet,
            pro_status: row[0].pro_status,
            pro_views: row[0].pro_views,
            latitude: row[0].latitude,
            longtitude: row[0].longtitude,
            pro_post: moment(row[0].pro_post, "YYYYMMDD").fromNow(),
            end_date: moment(row[0].end_date, "YYYYMMDD").fromNow(),
            location_id: row[0].location_id,
            type_id: row[0].type_id,
            style_id: row[0].style_id,
            style1: row[0].style1,
            style2: row[0].style2,
            style3: row[0].style3,
            style4: row[0].style4,
            style5: row[0].style5,
            style6: row[0].style6,
            style7: row[0].style7,
            style8: row[0].style8,
            style9: row[0].style9,
            style10: row[0].style10,
            style11: row[0].style11,
            style12: row[0].style12,
            style13: row[0].style13,
            style14: row[0].style14,
            style15: row[0].style15,
            style16: row[0].style16,
            style17: row[0].style17,
            style18: row[0].style18,
            style19: row[0].style19,
            style20: row[0].style20,
            email_id: row[0].email_id,
            fname: row[0].fname,
            lname: row[0].lname,
            id_line: row[0].id_line,
            facebook: row[0].facebook,
            cus_detail: row[0].cus_detail,
            phone: row[0].phone,
            loc_name: row[0].loc_name,
            type_name: row[0].type_name,
            province_id: row[0].province_id,
            provin_name: row[0].provin_name,
            zone_id: row[0].zone_id,
            zone_name: row[0].zone_name,
            packet_image: fs.readFileSync(partImage.packet + row[0].packet_image, 'base64'),
            profile_pic: fs.readFileSync(partImage.avatar + row[0].profile_pic, 'base64')

        }]
        // console.log(result)




        if (err) {
            res.json(err);
        }
        else {

            res.json(
                result
                // row
            );
        }

    })
});
module.exports = router;

