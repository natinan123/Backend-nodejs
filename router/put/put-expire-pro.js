var express = require('express') ;
var router =express.Router();
var expire = require('../../service/update/put-expire-pro');

router.get('/',function(req,res,next){
// var data=req.body;
// console.log(data);
    expire.expire((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;