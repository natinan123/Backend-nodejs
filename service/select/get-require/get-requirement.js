var db = require('../../../dbcon');
var member = {
    member: function (data, callback) {
        var sql = `SELECT
        requirement.req_id,
        requirement.req_area_max,
        requirement.req_area_min,
        requirement.req_price_max,
        requirement.req_price_min,
        SUBSTRING(requirement.req_date,1,10) AS req_date,
        type_pro.type_name,
        requirement.email_id,
        requirement.type_id,
        location.loc_name,
        requirement.location_id,
        province.province_id,
        province.provin_name,
        zone.zone_id,
        zone.zone_name
        FROM
        requirement
        LEFT JOIN location ON requirement.location_id = location.location_id
        LEFT JOIN type_pro ON requirement.type_id = type_pro.type_id
        INNER JOIN province ON location.province_id = province.province_id
        INNER JOIN zone ON province.zone_id = zone.zone_id
        WHERE email_id = ?
        ORDER BY req_date ASC`
        var email_id = data;

        return db.query(sql, [email_id], callback);
    }

}
module.exports = member;