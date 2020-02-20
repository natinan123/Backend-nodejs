var db = require('../../dbcon');
var location = {
    location: function (data, callback) {
        console.log(data);
        var loc_name = data.loc_name
        var province_id = data.province_id

        var sql = `INSERT INTO location (loc_name ,province_id) 
                            VALUES('${data.loc_name}', '${data.province_id}' );`
        return db.query(sql, [loc_name, province_id], callback);
    }

}
module.exports = location;

