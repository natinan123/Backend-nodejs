var db = require('../../dbcon');
var unfollow = {
    unfollow: function (data, callback) {
        console.log(data);

        var email_id = data.email_id
        var pro_id = data.pro_id

        var sql = `DELETE FROM follow 
                    WHERE email_id = '${email_id}' AND
                    pro_id = ${pro_id}; `
        console.log(sql);
        return db.query(sql, [email_id, pro_id], callback);
    }

}
module.exports = unfollow;