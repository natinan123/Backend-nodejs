var express = require('express') ;
var router =express.Router();
var admin = require('../../service/select/test/test');

router.get('/',function(req,res,next){
// var data=req.body
    admin.admin((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;