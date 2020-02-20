var db = require('../../dbcon');
var putrecom = {
    putrecom: function (data, callback) {

        var sql = `UPDATE recommend 
                       SET pro_id = '${data.pro_id}',
                       recom_date = now(),
                       recom_exp = DATE_ADD(NOW(), INTERVAL 60 DAY)
                            
            WHERE recom_id = '${data.recom_id}';`
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = putrecom;