var db=require('../../dbcon');
var deletereq ={
    deletereq :function(data,callback){
        console.log(data.req_id);
        
        var req_id =data.req_id
        
        var sql=`DELETE FROM requirement WHERE  req_id = ? `
        return db.query(sql,[ req_id ],callback);
    }

}
module.exports=deletereq ;