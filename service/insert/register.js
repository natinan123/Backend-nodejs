var db = require('../../dbcon');
var register = {
    register: function (data, callback) {
        console.log(data);
        var email_id = data.email_id
        var password = data.password
        var fname = data.fname
        var lname = data.lname
        var phone = data.phone
        var id_line = data.id_line
        var cus_status = data.cus_status
        var sql = `INSERT INTO customer (email_id, password, fname, lname, phone, id_line, cus_status) 
        VALUES('${data.email_id}', ${data.password}, '${data.fname}','${data.lname}' ,'${data.phone}','${data.id_line}','${data.cus_status}' );`
        return db.query(sql, [email_id, password, fname, lname, phone, id_line, cus_status], callback);
    }

}
module.exports = register;

