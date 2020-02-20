var express = require('express') ;
var router =express.Router();
var proview = require('../../service/update/put-pro-view');

router.put('/',function(req,res,next){
var data=req.body;
console.log(data);
    proview.proview(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;