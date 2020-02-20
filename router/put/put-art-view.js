var express = require('express') ;
var router =express.Router();
var artview = require('../../service/update/put-art-view');

router.put('/',function(req,res,next){
var data=req.body;
console.log(data);
    artview.artview(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;