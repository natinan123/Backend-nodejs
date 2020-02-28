var express = require('express');
var router = express.Router();
var packet = require('../../../service/select/get-require/get-packet');
const fs = require('fs');
var partImage = require('../../partImage');
var moment = require('moment'); moment.locale('th'); // เวลา


router.get('/', function (req, res, next) {
    // var data = req.body;
    // var data = req.params.email_id

    // console.log(data);
    packet.packet((err, row) => {

        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].image1;
            var element2 = row[i].packet_image;
            var image17 = fs.readFileSync(partImage.packet + element2, 'base64');
            console.log(image17);
            // // console.log(element);
            // result.push(data = {
            //     packet_id: row[i].packet_id,
            //     packet_image: row[i].packet_image,
            //     pro_id: row[i].pro_id,
            //     packet_date: moment(row[i].packet_date, "YYYYMMDD").fromNow(),
            //     pro_head: row[i].pro_head,
            //     type_id: row[i].type_id,
            //     type_name: row[i].type_name,
            //     pro_sell: row[i].pro_sell,
            //     pro_area: row[i].pro_area,
            //     pro_space: row[i].pro_space,
            //     price: row[i].price,
            //     pro_floor: row[i].pro_floor,
            //     pro_bedroom: row[i].pro_bedroom,
            //     pro_toilet: row[i].pro_toilet,
            //     pro_status: row[i].pro_status,
            //     pro_post: moment(row[i].pro_post, "YYYYMMDD").fromNow(),
            //     end_date: row[i].end_date,
            //     pro_views: row[i].pro_views,
            //     longtitude: row[i].longtitude,
            //     latitude: row[i].latitude,
            //     email_id: row[i].email_id,
            //     fname: row[i].fname,
            //     lname: row[i].lname,
            //     id_line: row[i].id_line,
            //     facebook: row[i].facebook,
            //     profile_pic: row[i].profile_pic,
            //     cus_status: row[i].cus_status,
            //     phone: row[i].phone,
            //     location_id: row[i].location_id,
            //     loc_name: row[i].loc_name,
            //     province_id: row[i].province_id,
            //     provin_name: row[i].provin_name,
            //     zone_id: row[i].zone_id,
            //     zone_name: row[i].zone_name,
            //     image1: fs.readFileSync(partImage.property + element, 'base64'),
            //     image2: fs.readFileSync(partImage.packet + element2, 'base64')

            // })
            // console.log(result)
        }



        if (err) {
            res.json(err);
        }
        else {

            res.json(
                // result
                row
            );
        }

    })
});
module.exports = router;

