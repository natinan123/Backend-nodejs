var db = require('../../../dbcon');
var recom = {
    recom: function (data, callback) {
        console.log(data);


        var sql = `INSERT INTO recommend (pro_id,recom_date,recom_exp) 
                            VALUES('${data.pro_id}', now(), DATE_ADD(NOW(), INTERVAL 60 DAY));`
        console.log(sql);
        return db.query(sql, callback);
    }

}
module.exports = recom;