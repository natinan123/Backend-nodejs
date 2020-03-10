var express = require('express');
var router = express.Router();
var recom = require('../../../service/insert/post-recom/post-recom');

router.post('/', function (req, res, next) {
    var data = req.body
    console.log(data);
    recom.recom(data, (err, row) => {
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
                "message": "Insert add successfully",
                "data": data

            });
        }


    })
});
module.exports = router;