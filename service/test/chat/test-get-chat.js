var db = require('../../../dbcon');
var chat = {
    chat: function (data, data2, callback) {
        console.log(data);
        var source = data
        var descination = data2


        var sql = `SELECT   message.message_id,
                            message.source,
                            message.descination,
                            message.mes_text,
                            message.time_stamp,
                            customer.fname,
                            customer.lname,
                            customer.profile_pic
                            FROM
                            message
                            LEFT JOIN customer ON message.source = customer.email_id
                            WHERE
                            message.source = '${source}' AND
                            message.descination = '${descination}' OR
                            message.source = '${descination}' AND
                            message.descination = '${source}' 
                            ORDER BY time_stamp ASC ; `
        console.log(sql);
        return db.query(sql, [source, descination], callback);
    }

}
module.exports = chat;