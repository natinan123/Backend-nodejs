var db = require('../../dbcon');
var artview = {
    artview: function (data, callback) {

        var sql = `UPDATE article
                    SET art_view = art_view+1
                    WHERE article_id = '${ data }' `
        console.log(sql);

        return db.query(sql, callback);
    }

}
module.exports = artview;