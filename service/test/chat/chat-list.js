var db = require('../../../dbcon');
var chat = {
    chat: function (data, callback) {
        console.log(data);
        console.log(data.length);

        // for (let i = 0; i < data.length; i++) {
        //     var sql = `INSERT INTO message  (source, descination, mes_text, time_stamp) 
        //         VALUES ('${data[i].source}', '${data[i].descination}', '${data[i].textchat}', NOW());`
        // }
        // return db.query(sql, callback);

        var data 
        let query = `INSERT INTO message  (source, descination, mes_text) 
                            VALUES  ?`;

        db.query(query, [data], function (err, result) {
            if (err)
                console.log(err)
            console.log(result);
        });
    }

}
module.exports = chat;


