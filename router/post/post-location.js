var express = require('express');
var router = express.Router();
var location = require('../../service/insert/post-location');

router.post('/', function (req, res, next) {
    var data = req.body
    console.log(data);
    location.location(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;