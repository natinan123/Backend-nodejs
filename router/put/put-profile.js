var express = require('express') ;
var router =express.Router();
var profile = require('../../service/update/put-profile');

router.put('/',function(req,res,next){
var data=req.body;
console.log(data);
    profile.profile(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;