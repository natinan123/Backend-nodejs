var db = require('../../../dbcon');
var avatar = {
    avatar: function (data, callback) {
        var email_id = data;
        var sql = `SELECT
        customer.email_id,
        customer.profile_pic
        FROM customer
        WHERE email_id = '${email_id}'`
        console.log(sql);
        return db.query(sql, [email_id], callback);
    }

}
module.exports = avatar;