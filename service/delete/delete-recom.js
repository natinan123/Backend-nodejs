var db = require('../../dbcon');
var recom = {
    recom: function (data, callback) {


        var sql = `DELETE FROM recommend WHERE recom_exp < NOW() ;`
        console.log(sql);
        return db.query(sql, callback);
    }

}
module.exports = recom;