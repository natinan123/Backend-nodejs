var express = require('express');
var router = express.Router();
var member = require('../../../service/select/get-require/get-requirement');

router.get('/:email_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.email_id
    member.member(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;