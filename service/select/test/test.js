var db= require('../../../dbcon');
var admin = {
    admin: function(callback){
        var sql = `SELECT * FROM customer WHERE cus_status = 'admin'`
        return db.query(sql,callback);
    }

}
module.exports=admin ;