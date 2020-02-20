var express = require('express');
var router = express.Router();
var postprq = require('../../service/insert/post-req');

router.post('/', function (req, res, next) {
    var data = req.body
    console.log(data);
    postprq.postprq(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;