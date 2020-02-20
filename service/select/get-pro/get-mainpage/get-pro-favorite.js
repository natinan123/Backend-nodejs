var db = require('../../../../dbcon');
var favorite = {
    favorite: function (data, callback) {
        var email_id = data;
        console.log(email_id);

        console.log(data);
        var sql = `SELECT
        follow.follow_id,
        follow.email_id,
        follow.pro_id,
        property.pro_head,
        property.pro_sell,
        property.pro_detail,
        property.pro_area,
        property.pro_space,
        property.price,
        property.pro_floor,
        property.pro_bedroom,
        property.pro_toilet,
        property.pro_status,
        property.pro_views,
        property.latitude,
        property.longtitude,  
        SUBSTRING(property.pro_post,1,10) AS pro_post,
        SUBSTRING(property.end_date,1,10) AS end_date,
        property.type_id,
        customer.email_id AS email_sell,
        customer.fname,
        customer.lname,
        customer.id_line,
        customer.facebook,
        customer.profile_pic,
        customer.cus_detail,
        customer.phone,
        type_pro.type_name,
        image.image1,
        location.location_id,
        location.loc_name,
        province.province_id,
        province.provin_name,
        zone.zone_id,
        zone.zone_name,
        style.style_id,
        style.pro_id,
        style.style1,
        style.style2,
        style.style3,
        style.style4,
        style.style5,
        style.style6,
        style.style7,
        style.style8,
        style.style9,
        style.style10,
        style.style11,
        style.style12,
        style.style13,
        style.style14,
        style.style15,
        style.style16,
        style.style17,
        style.style18,
        style.style19,
        style.style20
        FROM
        follow
        LEFT JOIN property ON follow.pro_id = property.pro_id
        INNER JOIN customer ON property.email_id = customer.email_id
        INNER JOIN type_pro ON property.type_id = type_pro.type_id
        INNER JOIN image ON image.pro_id = property.pro_id
        INNER JOIN location ON property.location_id = location.location_id
        INNER JOIN province ON location.province_id = province.province_id
        INNER JOIN zone ON province.zone_id = zone.zone_id
        INNER JOIN style ON style.pro_id = property.pro_id
        WHERE
        follow.email_id = '${email_id}' AND
        property.pro_status = 'เผยแพร่';`
        console.log(sql);
        return db.query(sql, [email_id], callback);
    }

}
module.exports = favorite;