var db = require('../../../dbcon');
var member = {
    member: function (data, callback) {
        var sql = `SELECT
        customer.email_id,
        customer.password,
        customer.fname,
        customer.lname,
        customer.id_line,
        customer.facebook,
        customer.profile_pic,
        customer.cus_detail,
        customer.cus_status,
        customer.phone
        FROM
        customer
        WHERE
        customer.email_id =  ?`
        var email_id = data;

        return db.query(sql, [email_id], callback);
    }

}
module.exports = member;