var db = require('../../dbcon');
var putstatus = {
    putstatus: function (data, callback) {
        // console.log(data);

        var sql = `UPDATE property 
                        SET pro_status = 'เผยแพร่'
                        WHERE pro_id = '${data}';`
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = putstatus;

