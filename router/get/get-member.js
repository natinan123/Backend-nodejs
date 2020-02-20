var express = require('express') ;
var router =express.Router();
var member = require('../../service/select/get-member');

router.get('/',function(req,res,next){
// var data=req.body
    member.member((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;