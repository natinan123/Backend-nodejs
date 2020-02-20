var express = require('express') ;
var router =express.Router();
var mappro = require('../../../service/select/get-pro/get-pro-map');

router.get('/',function(req,res,next){
// var data=req.body
    mappro.mappro((err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;