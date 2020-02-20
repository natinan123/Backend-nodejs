var express = require('express') ;
var router =express.Router();
var deleteloc = require('../../service/delete/delete-location');

router.delete('/:location_id',function(req,res,next){
var data=req.params
console.log(data);
    deleteloc.deleteloc(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;