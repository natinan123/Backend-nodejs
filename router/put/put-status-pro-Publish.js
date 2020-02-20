var express = require('express');
var router = express.Router();
var putstatus = require('../../service/update/put-status-pro-Publish');

router.put('/', function (req, res, next) {
    var data = req.body;
    console.log(data);
    putstatus.putstatus(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;