var db=require('../../dbcon');
var upgrade ={
    upgrade :function(data,callback){
        // console.log(data.requp_id);
        
        var requp_id =data.requp_id
        
        var sql=`DELETE FROM req_upgrade WHERE requp_id =? `
        return db.query(sql,[ requp_id ],callback);
    }

}
module.exports=upgrade ;