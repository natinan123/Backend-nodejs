var db = require('../../dbcon');
var putstatus = {
    putstatus: function (data, callback) {

       
        var sql = `UPDATE property 
                        SET pro_status = 'ร่าง'
                        WHERE pro_id = '${ data.pro_id }';`
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = putstatus;

