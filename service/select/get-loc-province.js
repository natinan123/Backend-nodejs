var db = require('../../dbcon');
var province = {
    province: function (data, callback) {
        var sql = ` SELECT  province.province_id,
                            province.provin_name,
                            province.zone_id
                            FROM
                            province
                            WHERE zone_id = '${data}'
                            ORDER BY provin_name ASC ; `
        var province_id = data;

        return db.query(sql, [province_id], callback);
    }

}
module.exports = province;