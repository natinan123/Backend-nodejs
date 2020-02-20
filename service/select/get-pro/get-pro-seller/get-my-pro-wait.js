var db = require('../../../../dbcon');
var pro_wait = {
    pro_wait: function (data, callback) {
        var sql = `SELECT
        property.pro_id,
        property.pro_head,
        type_pro.type_id,
        type_pro.type_name,
        property.pro_sell,
        property.pro_detail,
        property.pro_area,
        property.pro_space,
        property.price,
        property.pro_floor,
        property.pro_bedroom,
        property.pro_toilet,
        property.pro_status,
        SUBSTRING(property.pro_post,1,10) AS pro_post,
        SUBSTRING(property.end_date,1,10) AS end_date,
        property.pro_views,
        property.longtitude,
        property.latitude,
        customer.email_id,
        customer.password,
        customer.fname,
        customer.lname,
        customer.id_line,
        customer.facebook,
        customer.profile_pic,
        customer.cus_detail,
        customer.cus_status,
        customer.phone,
        image.image_id,
        image.image1,
        style.style_id,
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
        style.style20,
        location.loc_name,
        property.location_id,
        province.province_id,
        province.provin_name,
        zone.zone_id,
        zone.zone_name
        FROM
        property
        LEFT JOIN image ON image.pro_id = property.pro_id
        LEFT JOIN style ON style.pro_id = property.pro_id
        LEFT JOIN customer ON property.email_id = customer.email_id
        LEFT JOIN location ON property.location_id = location.location_id
        LEFT JOIN type_pro ON property.type_id = type_pro.type_id
        INNER JOIN province ON location.province_id = province.province_id
        INNER JOIN zone ON province.zone_id = zone.zone_id
				WHERE property.email_id = ?  and 
				property.pro_status = 'รอตรวจสอบ'
				ORDER BY  pro_post ASC`
        var email_id = data;

        return db.query(sql, [email_id], callback);
    }

}
module.exports = pro_wait;