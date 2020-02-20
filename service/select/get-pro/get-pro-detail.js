var db = require('../../../dbcon');
var prodetail = {
    prodetail: function (data, callback) {
        var sql = `SELECT
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
        property.pro_views,
        property.latitude,
        property.longtitude,
        SUBSTRING(property.pro_post,1,10) AS pro_post,
        SUBSTRING(property.end_date,1,10) AS end_date,
        property.location_id,
        property.type_id,
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
        image.image11,
        image.image12,
        image.image13,
        image.image14,
        image.image15,
        image.image16,
        image.image17,
        image.image18,
        image.image19,
        image.image20,
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
        customer.email_id,
        customer.fname,
        customer.lname,
        customer.id_line,
        customer.facebook,
        customer.profile_pic,
        customer.cus_detail,
        customer.phone,
        location.loc_name,
        type_pro.type_name,
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
        WHERE
        property.pro_id = ?`
        var pro_id = data;

        return db.query(sql, [pro_id], callback);
    }

}
module.exports = prodetail;