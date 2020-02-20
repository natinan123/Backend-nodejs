var express = require('express') ;
var router =express.Router();
var property = require('../../../service/select/get-rent/get-rent-house');

router.get('/',function(req,res,next){
// var data=req.body
    property.property((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;