var db = require('../../../dbcon');
var limit = {
    limit: function (callback) {
        var sql = `SELECT
        req_upgrade.requp_id,
        req_upgrade.email_id,
        req_upgrade.limit_id,
        req_upgrade.date_req,
        customer.fname,
        customer.lname
        FROM
        req_upgrade
        LEFT JOIN customer ON req_upgrade.email_id = customer.email_id
        ORDER BY
        req_upgrade.date_req ASC
        `
        return db.query(sql, callback);
    }

}
module.exports = limit;