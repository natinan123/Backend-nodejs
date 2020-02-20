var db = require('../../dbcon');
var province = {
    province: function (data, callback) {
        var sql = `       
                SELECT
                location.location_id,
                location.loc_name,
                location.province_id
                FROM
                location
                WHERE
                location.province_id = '${data}'
                ORDER BY
                location.loc_name ASC
                `
        var province_id = data;

        return db.query(sql, [province_id], callback);
    }

}
module.exports = province;