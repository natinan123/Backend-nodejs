var db = require('../../../dbcon');
var chat = {
    chat: function (data, callback) {
        // console.log(data);
        var source = data.source
        var descination = data.descination
        // var mes_text = data.mes_text


        console.log(sql)
        var sql = `INSERT INTO message 
                                    (source, descination, mes_text, time_stamp) 
                                VALUES
                                    ('${data.source}', '${data.descination}', 'ติดต่อสอบถาม', NOW());`
        
        return db.query(sql, [source, descination], callback);

    }

}
module.exports = chat;

