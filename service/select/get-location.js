var db = require('../../dbcon');
var location = {
    location: function (callback) {
        var sql = `SELECT
        location.location_id,
        location.loc_name,
        location.province_id,
            (SELECT COUNT(location_id) 
                FROM property  
                WHERE location_id = location.location_id AND 
                property.pro_status = 'เผยแพร่') AS countLoc,
        province.provin_name,
        zone.zone_id,
        zone.zone_name
        FROM
        location
        LEFT JOIN province ON location.province_id = province.province_id
        INNER JOIN zone ON province.zone_id = zone.zone_id
        ORDER BY
        countLoc DESC,
        location.loc_name ASC
        `
        return db.query(sql, callback);
    }

}
module.exports = location;