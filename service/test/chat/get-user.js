var db = require('../../../dbcon');
var member = {
    member: function (callback) {
        var sql = `SELECT
        c.email_id,
        c.fname,
        c.lname,
        c.id_line,
        c.facebook,
        c.profile_pic,
        c.cus_detail,
        c.cus_status,
        c.phone
        FROM
        customer c
        `
        return db.query(sql, callback);
    }

}
module.exports = member;