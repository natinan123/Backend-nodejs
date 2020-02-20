var db = require('../../dbcon');
var proview = {
    proview: function (data, callback) {

        var sql = `UPDATE property
                    SET pro_views = pro_views+1
                    WHERE pro_id = '${ data }'     
       `
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = proview;