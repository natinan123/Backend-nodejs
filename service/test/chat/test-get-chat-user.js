var db = require('../../../dbcon');
var chat = {
    chat: function (data, callback) {
        console.log(data);
        var source = data

        
        var sql = `SELECT DISTINCT
                                message.source,
                                sou.fname AS sou_fname,
                                sou.lname AS sou_lname,
                                sou.profile_pic AS sou_profile_pic,
                                message.descination,
                                des.fname AS des_fname,
                                des.lname AS des_lname,
                                des.profile_pic AS des_profile_pic
                                FROM
                                message
                                LEFT JOIN customer AS sou ON message.source = sou.email_id
                                LEFT JOIN customer AS des ON message.descination = des.email_id
                                WHERE
                                message.source = '${source}'
                    UNION
                    SELECT DISTINCT
                        message.descination,
                        des.fname AS des_fname,
                        des.lname AS des_lname,
                        des.profile_pic AS des_profile_pic,
                        message.source,
                        sou.fname AS sou_fname,
                        sou.lname AS sou_lname,
                        sou.profile_pic AS sou_profile_pic
                        FROM
                        message
                        LEFT JOIN customer AS sou ON message.source = sou.email_id
                        LEFT JOIN customer AS des ON message.descination = des.email_id
                        WHERE
                        message.descination = '${source}' `
        console.log(sql);
        return db.query(sql, [source], callback);
    }

}
module.exports = chat;