var express = require('express') ;
var router =express.Router();
var selectreplymember = require('../../service/select/get-test');

router.get('/:pro_id',function(req,res,next){
// var data=req.body
var data=req.params.pro_id
    selectreplymember.selectreplymember(data,(err,row) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }

        
    } )
});
module.exports=router ;