var express = require('express');
var router = express.Router();
var follow = require('../../../../service/select/get-pro/get-mainpage/get_follow');
const fs = require('fs');
var partImage = require('../../../partImage');

router.post('/', function (req, res, next) {
    // var data = req.params.email_id
    var data = req.body;
    console.log(data);

    follow.follow(data, (err, row) => {

        if (err) {
            res.json(err);
        }
        else {
            res.json(
                row
            );
        }
    })
});
module.exports = router;

