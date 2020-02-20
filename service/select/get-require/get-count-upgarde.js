var db = require('../../../dbcon');
var countup = {
    countup: function (callback) {
        var sql = `SELECT COUNT(requp_id) as countup
                    FROM req_upgrade
        `
        return db.query(sql, callback);
    }

}
module.exports = countup;