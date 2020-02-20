var db = require('../../dbcon');
var putlocation = {
    putlocation: function (data, callback) {

        var sql = `UPDATE location 
                            SET loc_name = '${data.loc_name}',
                            province_id = '${data.province_id}'
                            WHERE location_id = '${data.location_id}';`
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = putlocation;