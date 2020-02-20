var express = require('express') ;
var router =express.Router();
var limit = require('../../../service/select/get-require/get-req-upgrade');

router.get('/',function(req,res,next){
// var data=req.body
    limit.limit((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;