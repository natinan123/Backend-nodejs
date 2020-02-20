var express = require('express');
var router = express.Router();
var testcheck = require('../../service/test/test-check');

router.post('/', function (req, res, next) {
    var data = req.body
    console.log(req);
    testcheck.testcheck(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;