var db = require('../../dbcon');
var login = {
    login: function (data, callback) {
        console.log(data);
        var email_id = data.email_id
        var password = data.password
        var sql = `SELECT * FROM customer WHERE email_id = '${data.email_id}' AND password = '${data.password}'`
        return db.query(sql, [email_id, password], callback);
    }

}
module.exports = login;