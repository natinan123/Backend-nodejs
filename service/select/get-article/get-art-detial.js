var db = require('../../../dbcon');
var artdetail = {
    artdetail: function (data, callback) {
        var sql = `SELECT
        article.article_id,
        article.articl_head,
        article.art_detail1,
        article.art_detail2,
        article.art_pic1,
        article.art_pic2,
        article.art_pic3,
        article.art_type,
        SUBSTRING(article.art_date,1,10) AS art_date,
        article.art_view
        FROM
        article
        WHERE article_id = ?`
        var article_id = data;

        return db.query(sql, [article_id], callback);
    }

}
module.exports = artdetail;