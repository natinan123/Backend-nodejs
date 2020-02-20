var express = require('express');
var router = express.Router();
var favorite = require('../../../../service/select/get-pro/get-mainpage/get-pro-favorite');
const fs = require('fs');
var partImage = require('../../../partImage');

router.get('/:email_id', function (req, res, next) {
    var data = req.params.email_id
    console.log(data);
    // var data = req.body;
    favorite.favorite(data, (err, row) => {

        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].image1
            var element2 = row[i].profile_pic
            // console.log(element);
            result.push(data = {
                follow_id :row[i].follow_id,
                email_id :row[i].email_id,
                pro_id :row[i].pro_id,
                pro_head :row[i].pro_head,
                pro_sell :row[i].pro_sell,
                pro_detail :row[i].pro_detail,
                pro_area :row[i].pro_area,
                pro_space :row[i].pro_space,
                price :row[i].price,
                pro_floor :row[i].pro_floor,
                pro_bedroom :row[i].pro_bedroom,
                pro_toilet :row[i].pro_toilet,
                pro_status :row[i].pro_status,
                pro_views :row[i].pro_views,
                latitude :row[i].latitude,
                longtitude :row[i].longtitude,
                pro_post :row[i].pro_post,
                end_date :row[i].end_date,
                type_id :row[i].type_id,
                email_sell :row[i].email_sell,
                fname :row[i].fname,
                lname :row[i].lname,
                id_line :row[i].id_line,
                facebook :row[i].facebook,
                profile_pic: fs.readFileSync(partImage.avatar + element2, 'base64'),
                cus_detail :row[i].cus_detail,
                phone :row[i].phone,
                type_name :row[i].type_name,
                location_id :row[i].location_id,
                loc_name :row[i].loc_name,
                province_id :row[i].province_id,
                provin_name :row[i].provin_name,
                zone_id :row[i].zone_id,
                zone_name :row[i].zone_name,
                style_id :row[i].style_id,
                style1 :row[i].style1,
                style2 :row[i].style2,
                style3 :row[i].style3,
                style4 :row[i].style4,
                style5 :row[i].style5,
                style6 :row[i].style6,
                style7 :row[i].style7,
                style8 :row[i].style8,
                style9 :row[i].style9,
                style10 :row[i].style10,
                style11 :row[i].style11,
                style12 :row[i].style12,
                style13 :row[i].style13,
                style14 :row[i].style14,
                style15 :row[i].style15,
                style16 :row[i].style16,
                style17 :row[i].style17,
                style18 :row[i].style18,
                style19 :row[i].style19,
                style20 :row[i].style20,
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

