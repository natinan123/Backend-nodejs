var express = require('express') ;
var router =express.Router();
var typeid = require('../../../service/select/get-pro/get-pro-type');

router.get('/:type_id',function(req,res,next){
// var data=req.body
var data=req.params.type_id
    typeid.typeid(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;