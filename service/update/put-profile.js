var db = require('../../dbcon');
var profile = {
    profile: function (data, callback) {

        var sql = `UPDATE customer 
                        SET fname = '${data.fname}',
                            lname = '${data.lname}',
                            phone = '${data.phone}',
                            facebook = '${data.facebook}',
                            id_line = '${data.id_line}',
                            cus_detail = '${data.cus_detail}'
                        WHERE email_id = '${data.email_id}';`
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = profile;