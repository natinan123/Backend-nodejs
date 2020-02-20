var db = require('../../dbcon');
var location = {
    location: function (callback) {
        var sql = `SELECT
        zone.zone_id,
        zone.zone_name
        FROM
        zone
        ORDER BY
        zone_id ASC `
        return db.query(sql, callback);
    }

}
module.exports = location;