var db = require('../../dbcon');
var expire = {
    expire: function ( callback) {

        var sql = `UPDATE property 
                        SET pro_status= 'ปิดการขาย' 
                        WHERE end_date < NOW();`
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = expire;