var db = require('../../../../dbcon');
var guide_price = {
    guide_price: function (data, callback) {
        var pro_area = data;
        console.log(pro_area);
        var sql = `SELECT avg(price) as guide_price
        FROM property
        WHERE pro_area BETWEEN ${pro_area}-20 and ${pro_area}+20
        LIMIT 10;`
        console.log(sql);
        return db.query(sql, [pro_area], callback);
    }

}
module.exports = guide_price;