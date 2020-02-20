var db = require('../../../dbcon');
var mappro = {
    mappro: function (callback) {
        var sql = `SELECT
        property.pro_id,
        property.pro_head,
        property.latitude,
        property.longtitude,
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
        property.pro_post,
        property.pro_views,
        property.location_id,
        property.email_id,
        type_pro.type_name,
        type_pro.type_id,
        customer.email_id,
        customer.fname,
        customer.lname,
        customer.id_line,
        customer.facebook,
        customer.profile_pic
        FROM
        property
        INNER JOIN type_pro ON property.type_id = type_pro.type_id
        INNER JOIN customer ON property.email_id = customer.email_id
        
        `
        return db.query(sql, callback);
    }

}
module.exports = mappro;