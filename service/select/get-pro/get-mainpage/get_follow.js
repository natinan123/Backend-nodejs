var db = require('../../../../dbcon');
var follow = {
    follow: function (data, callback) {
        var email_id = data.email_id;
        var pro_id = data.pro_id;
        console.log(data);

        console.log(data);
        var sql = `SELECT COUNT(follow_id) as follow
                            FROM follow
                            WHERE email_id = '${email_id}' AND pro_id = ${pro_id};`
        console.log(sql);
        return db.query(sql, [email_id, pro_id], callback);
    }

}
module.exports = follow;