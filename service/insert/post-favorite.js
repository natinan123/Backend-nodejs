var db = require('../../dbcon');
var favorite = {
    favorite: function (data, callback) {
        console.log(data);
        var email_id = data.email_id
        var pro_id = data.pro_id

        var sql = `INSERT INTO follow (email_id, pro_id )
                        VALUES('${email_id}', '${pro_id}');`
        console.log(sql);
        return db.query(sql, [email_id, pro_id], callback);
    }

}
module.exports = favorite;

