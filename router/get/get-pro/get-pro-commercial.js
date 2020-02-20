var express = require('express') ;
var router =express.Router();
const fs = require('fs');
var partImage = require('../../partImage');
var moment = require('moment'); moment.locale('th'); // เวลา
var property = require('../../../service/select/get-pro/get-pro-commercial');

router.get('/',function(req,res,next){
// var data=req.body
    property.property((err,row) =>{
        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].image1
            console.log(element);
            result.push(data = {
                pro_id: row[i].pro_id,
                pro_head: row[i].pro_head,
                type_id: row[i].type_id,
                type_name: row[i].type_name,
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
                longtitude: row[i].longtitude,
                latitude: row[i].latitude,
                email_id: row[i].email_id,
                password: row[i].password,
                fname: row[i].fname,
                lname: row[i].lname,
                id_line: row[i].id_line,
                facebook: row[i].facebook,
                profile_pic: row[i].profile_pic,
                cus_detail: row[i].cus_detail,
                cus_status: row[i].cus_status,
                phone: row[i].phone,
                style_id: row[i].style_id,
                style1: row[i].style1,
                style2: row[i].style2,
                style3: row[i].style3,
                style4: row[i].style4,
                style5: row[i].style5,
                style6: row[i].style6,
                style7: row[i].style7,
                style8: row[i].style8,
                style9: row[i].style9,
                style10: row[i].style10,
                style11: row[i].style11,
                style12: row[i].style12,
                style13: row[i].style13,
                style14: row[i].style14,
                style15: row[i].style15,
                style16: row[i].style16,
                style17: row[i].style17,
                style18: row[i].style18,
                style19: row[i].style19,
                style20: row[i].style20,
                loc_name: row[i].loc_name,
                location_id: row[i].location_id,
                province_id: row[i].province_id,
                provin_name: row[i].provin_name,
                zone_id: row[i].zone_id,
                zone_name: row[i].zone_name,
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


        
    } )
});
module.exports=router ;