var express = require('express') ;
var router =express.Router();
var type = require('../../../service/select/get-pro/get-type');

router.get('/',function(req,res,next){
// var data=req.body
    type.type((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;