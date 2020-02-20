var db = require('../../dbcon');
var selectreplymember = {
    selectreplymember: function (data, callback) {
        var sql = `SELECT *
        FROM property
        WHERE pro_id = ?`
        var pro_id = data;

        return db.query(sql, [pro_id], callback);
    }

}
module.exports = selectreplymember;
// test