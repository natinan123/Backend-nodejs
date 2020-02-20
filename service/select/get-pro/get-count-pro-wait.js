var db = require('../../../dbcon');
var countProWait = {
    countProWait: function (callback) {
        var sql = `SELECT COUNT(pro_id) as count_wait
        FROM property
        WHERE pro_status = 'รอตรวจสอบ'
        `
        return db.query(sql, callback);
    }

}
module.exports = countProWait;