var express = require('express') ;
var router =express.Router();
var deletereq = require('../../service/delete/delete-req');

router.delete('/:req_id',function(req,res,next){
var data=req.params
console.log(data);
    deletereq.deletereq(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;