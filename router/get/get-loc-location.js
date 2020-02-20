var express = require('express');
var router = express.Router();
var province = require('../../service/select/get-loc-location');

router.get('/:province_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.province_id
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