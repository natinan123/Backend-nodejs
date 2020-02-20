var express = require('express');
var router = express.Router();
var province = require('../../service/select/get-loc-province');

router.get('/:zone_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.zone_id
    province.province(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;