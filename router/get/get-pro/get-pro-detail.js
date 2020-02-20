var express = require('express');
var router = express.Router();
var prodetail = require('../../../service/select/get-pro/get-pro-detail');
const fs = require('fs');
var partImage = require('../../partImage');


router.get('/:pro_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.pro_id
    prodetail.prodetail(data, (err, row) => {



        if (row[0].image1 != 'undefined') {
            var pro1 = row[0].image1;
            var image1 = fs.readFileSync(partImage.property + pro1, 'base64');



        }
        if (row[0].image2 != 'undefined') {
            var pro2 = row[0].image2;
            var image2 = fs.readFileSync(partImage.property + pro2, 'base64');

        }
        if (row[0].image3 != 'undefined') {
            var pro3 = row[0].image3;
            var image3 = fs.readFileSync(partImage.property + pro3, 'base64');
        }
        if (row[0].image4 != 'undefined') {
            var pro4 = row[0].image4;
            var image4 = fs.readFileSync(partImage.property + pro4, 'base64');
        }
        if (row[0].image5 != 'undefined') {
            var pro5 = row[0].image5;
            var image5 = fs.readFileSync(partImage.property + pro5, 'base64');
        }
        if (row[0].image6 != 'undefined') {
            var pro6 = row[0].image6;
            var image6 = fs.readFileSync(partImage.property + pro6, 'base64');
        }
        if (row[0].image7 != 'undefined') {
            var pro7 = row[0].image7;
            var image7 = fs.readFileSync(partImage.property + pro7, 'base64');
        }
        if (row[0].image8 != 'undefined') {
            var pro8 = row[0].image8;
            var image8 = fs.readFileSync(partImage.property + pro8, 'base64');
        }
        if (row[0].image9 != 'undefined') {
            var pro9 = row[0].image9;
            var image9 = fs.readFileSync(partImage.property + pro9, 'base64');
        }
        if (row[0].image10 != 'undefined') {
            var pro10 = row[0].image10;
            var image10 = fs.readFileSync(partImage.property + pro10, 'base64');
        }
        if (row[0].image11 != 'undefined') {
            var pro11 = row[0].image11;
            var image11 = fs.readFileSync(partImage.property + pro11, 'base64');
        }
        if (row[0].image12 != 'undefined') {
            var pro12 = row[0].image12;
            var image12 = fs.readFileSync(partImage.property + pro12, 'base64');

        }
        if (row[0].image13 != 'undefined') {
            var pro13 = row[0].image13;
            var image13 = fs.readFileSync(partImage.property + pro13, 'base64');
        }
        if (row[0].image14 != 'undefined') {
            var pro14 = row[0].image14;
            var image14 = fs.readFileSync(partImage.property + pro14, 'base64');
        }
        if (row[0].image15 != 'undefined') {
            var pro15 = row[0].image15;
            var image15 = fs.readFileSync(partImage.property + pro15, 'base64');
        }
        if (row[0].image16 != 'undefined') {
            var pro16 = row[0].image16;
            var image16 = fs.readFileSync(partImage.property + pro16, 'base64');
        }
        if (row[0].image17 != 'undefined') {
            var pro17 = row[0].image17;
            var image17 = fs.readFileSync(partImage.property + pro17, 'base64');
        }
        if (row[0].image18 != 'undefined') {
            var pro18 = row[0].image18;
            var image18 = fs.readFileSync(partImage.property + pro18, 'base64');
        }
        if (row[0].image19 != 'undefined') {
            var pro19 = row[0].image19;
            var image19 = fs.readFileSync(partImage.property + pro19, 'base64');
        }
        if (row[0].image20 != 'undefined') {
            var pro20 = row[0].image20;
            var image20 = fs.readFileSync(partImage.property + pro20, 'base64');
        }

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
        var pro_post = row[0].pro_post;
        var end_date = row[0].end_date;
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
        var profile_pic = row[0].profile_pic;
        var cus_detail = row[0].cus_detail;
        var phone = row[0].phone;
        var loc_name = row[0].loc_name;
        var type_name = row[0].type_name;
        var province_id = row[0].province_id;
        var provin_name = row[0].provin_name;
        var zone_id = row[0].zone_id;
        var zone_name = row[0].zone_name;

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
            profile_pic,
            cus_detail,
            phone,
            loc_name,
            type_name,
            province_id,
            provin_name,
            zone_id,
            zone_name,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
            image14,
            image15,
            image16,
            image17,
            image18,
            image19,
            image20
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
