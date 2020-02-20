var express = require('express') ;
var router =express.Router();
var countProWait = require('../../../service/select/get-pro/get-count-pro-wait');

router.get('/',function(req,res,next){
// var data=req.body
    countProWait.countProWait((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;