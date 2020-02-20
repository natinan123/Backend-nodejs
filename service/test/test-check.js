var db = require('../../dbcon');
var testcheck = {
    testcheck: function (data, callback) {
        // console.log(data);
        var style1 = data.style1
        // var style2 = data.style2
        // var style3 = data.style3

        var sql = `INSERT INTO test_check (test_check.c1)
                        VALUES ('${data.style1}');`
        console.log(sql);
        return db.query(sql, [style1], callback);
    }

}
module.exports = testcheck;