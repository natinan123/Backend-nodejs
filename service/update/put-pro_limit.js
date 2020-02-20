var db = require('../../dbcon');
var prolimit = {
    prolimit: function (data, callback) {

        var sql = `UPDATE customer 
                        SET limit_id = '${data.limit_id}'
                        WHERE email_id = '${data.email_id}';`
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = prolimit;