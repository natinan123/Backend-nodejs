var express = require('express');
var router = express.Router();
var guide_price = require('../../../../service/select/get-pro/get-pro-seller/guide_price');

router.get('/:pro_area', function (req, res, next) {
    // var data = req.body.pro_area
    var data = req.params.pro_area
    console.log(data);

    guide_price.guide_price(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;