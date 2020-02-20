var express = require('express');
var router = express.Router();
const fs = require('fs');
var partImage = require('../partImage');

var property = require('../../service/test/test-get-pro');

router.get('/', function (req, res, next) {
    // var data=req.body
    property.property((err, row) => {

        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].image1
            console.log(element);
            result.push(data = {
                pro_id : row[i].pro_id,
                pro_head : row[i].pro_head,
                type_id : row[i].type_id,
                type_name : row[i].type_name,
                pro_sell : row[i].pro_sell,
                pro_detail : row[i].pro_detail,
                pro_area : row[i].pro_area,
                pro_space : row[i].pro_space,
                price : row[i].price,
                pro_floor : row[i].pro_floor,
                pro_bedroom : row[i].pro_bedroom,
                pro_toilet : row[i].pro_toilet,
                pro_status : row[i].pro_status,
                pro_map : row[i].pro_map,
                pro_post : row[i].pro_post,
                pro_views : row[i].pro_views,
                longtitude : row[i].longtitude,
                latitude : row[i].latitude,
                email_id : row[i].email_id,
                password : row[i].password,
                fname : row[i].fname,
                lname : row[i].lname,
                id_line : row[i].id_line,
                facebook : row[i].facebook,
                profile_pic : row[i].profile_pic,
                cus_detail : row[i].cus_detail,
                cus_status : row[i].cus_status,
                phone : row[i].phone,
                limit_id : row[i].limit_id,
                style_id : row[i].style_id,
                style1 : row[i].style1,
                style2 : row[i].style2,
                style3 : row[i].style3,
                style4 : row[i].style4,
                style5 : row[i].style5,
                style6 : row[i].style6,
                style7 : row[i].style7,
                style8 : row[i].style8,
                style9 : row[i].style9,
                style10 : row[i].style10,
                loc_name : row[i].loc_name,
                loc_zone : row[i].loc_zone,
                location_id : row[i].location_id,
                zone_name : row[i].zone_name,
                image1: fs.readFileSync(partImage.property + element, 'base64')

            })
            
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