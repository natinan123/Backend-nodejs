var db = require('../../../dbcon');
var article = {
    article: function (callback) {
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
        article `
        return db.query(sql, callback);
    }

}
module.exports = article;