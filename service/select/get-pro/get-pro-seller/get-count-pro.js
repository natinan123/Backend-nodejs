var db = require('../../../../dbcon');
var Mypro = {
    Mypro: function (data, callback) {
        var sql = `SELECT COUNT(email_id) as count_pro
        FROM property 
        WHERE email_id = ?
        and pro_status != 'ร่าง' `
        var email_id = data;

        return db.query(sql, [email_id], callback);
    }

}
module.exports = Mypro;