var express = require('express') ;
var router =express.Router();
var putrecom = require('../../service/update/put-recom');

router.put('/',function(req,res,next){
var data=req.body;
console.log(data);
    putrecom.putrecom(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;