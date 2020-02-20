var express = require('express') ;
var router =express.Router();
var countup = require('../../../service/select/get-require/get-count-upgarde');

router.get('/',function(req,res,next){
// var data=req.body
    countup.countup((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;