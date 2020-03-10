var express = require('express');
var router = express.Router();
var recom = require('../../service/delete/delete-recom');

router.delete('/', function (req, res, next) {
    // var data=req.params
    // console.log(data);
    recom.recom((err, row) => {
        if (err) {
            // res.json(err);
            res.status(400).json({
                "status": "failed",
                "code": "400",
                "message": "This item already exists"
            });
        }
        else {
            // res.json(row);
            res.status(200).json({
                "status": "success",
                "code": "200",
                "message": "delete successfully",
            });
        }

    })
});
module.exports = router;