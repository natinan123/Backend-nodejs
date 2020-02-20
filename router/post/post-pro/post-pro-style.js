var express = require('express') ;
var router =express.Router();
var property = require('../../../service/insert/post-pro/post-pro-style');

router.post('/',function(req,res,next){
var data=req.body
// console.log(data);
    property.property(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;