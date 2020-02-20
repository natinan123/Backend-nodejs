var express = require('express') ;
var router =express.Router();
var location = require('../../service/select/get-loc-zone');

router.get('/',function(req,res,next){
// var data=req.body
    location.location((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;