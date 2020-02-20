var db = require('../../dbcon');
var recommend = {
    recommend: function (callback) {
        var sql = `SELECT
        recommend.recom_id,
        property.pro_id,
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
        SUBSTRING(property.pro_post,1,10) AS pro_post,
        SUBSTRING(property.end_date,1,10) AS end_date,
        property.pro_views,
        property.location_id,
        customer.fname,
        customer.lname,
        customer.id_line,
        customer.facebook,
        customer.profile_pic,
        customer.cus_detail,
        customer.cus_status,
        customer.phone,
        recommend.pro_id,
        customer.email_id,
        property.latitude,
        property.longtitude,
        type_pro.type_id,
        type_pro.type_name,
        image.image1,
        location.loc_name,
        location.province_id,
        province.provin_name,
        zone.zone_name,
        zone.zone_id
        FROM
        recommend
        INNER JOIN property ON recommend.pro_id = property.pro_id
        LEFT JOIN customer ON property.email_id = customer.email_id
        LEFT JOIN type_pro ON property.type_id = type_pro.type_id
        INNER JOIN location ON property.location_id = location.location_id
        LEFT JOIN image ON image.pro_id = property.pro_id
        LEFT JOIN province ON location.province_id = province.province_id
        LEFT JOIN zone ON province.zone_id = zone.zone_id
        ORDER BY
        recommend.recom_id ASC
        
        
        
        `
        return db.query(sql, callback);
    }

}
module.exports = recommend;