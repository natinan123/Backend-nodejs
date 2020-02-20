var express = require('express');
var router = express.Router();
var putlocation = require('../../service/update/put-location');

router.put('/', function (req, res, next) {
    var data = req.body;
    console.log(data);
    putlocation.putlocation(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;