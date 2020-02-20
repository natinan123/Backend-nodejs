var db = require('../../dbcon');
var property = {
    property: function (callback) {
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
        property.pro_map,
        SUBSTRING(property.pro_post,1,10) AS pro_post,
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
        customer.limit_id,
        image.image_id,
        image.image1,
        image.image2,
        image.image3,
        image.image4,
        image.image5,
        image.image6,
        image.image7,
        image.image8,
        image.image9,
        image.image10,
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
        location.loc_name,
        location.loc_zone,
        location.location_id,
        zone.zone_name
        FROM
        property
        LEFT JOIN image ON image.pro_id = property.pro_id
        LEFT JOIN style ON style.pro_id = property.pro_id
        LEFT JOIN customer ON property.email_id = customer.email_id
        LEFT JOIN location ON property.location_id = location.location_id
        LEFT JOIN type_pro ON property.type_id = type_pro.type_id
        LEFT JOIN zone ON location.loc_zone = zone.loc_zone
        `
        return db.query(sql, callback);
    }

}
module.exports = property;