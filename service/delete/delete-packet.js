var db = require('../../dbcon');
var packet = {
    packet: function (data, callback) {
        console.log(data);


        var sql = `DELETE FROM packet WHERE packet_id = ${data.packet_id} ; `
        console.log(sql);
        return db.query(sql, callback);
    }

}
module.exports = packet;