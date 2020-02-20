var db = require('../../../dbcon');
var chat = {
    chat: function (data,  callback) {
        console.log(data);
        var search = data ;
        


        var sql = `SELECT   customer.email_id,
                            customer.fname,
                            customer.lname,
                            customer.profile_pic
                            FROM
                            customer
                            WHERE customer.email_id LIKE '%${search}%' or
                                        customer.fname LIKE '%${search}%' or
                                        customer.lname LIKE '%${search}%'; `
        console.log(sql);
        return db.query(sql, [search], callback);
    }

}
module.exports = chat;