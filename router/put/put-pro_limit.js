var express = require('express') ;
var router =express.Router();
var prolimit = require('../../service/update/put-pro_limit');

router.put('/',function(req,res,next){
var data=req.body;
console.log(data);
    prolimit.prolimit(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;