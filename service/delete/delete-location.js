var db=require('../../dbcon');
var deleteloc ={
    deleteloc :function(data,callback){
        console.log(data.location_id);
        
        var location_id =data.location_id
        
        var sql=`DELETE FROM location WHERE location_id =? `
        return db.query(sql,[ location_id ],callback);
    }

}
module.exports=deleteloc ;