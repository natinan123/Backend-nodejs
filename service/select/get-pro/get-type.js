var db = require('../../../dbcon');
var type = {
    type: function (callback) {
        var sql = `SELECT
        type_pro.type_id,
        type_pro.type_name
        FROM
        type_pro        
        `
        return db.query(sql, callback);
    }

}
module.exports = type;