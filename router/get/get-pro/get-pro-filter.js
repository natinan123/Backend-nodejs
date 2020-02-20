var express = require('express');
var router = express.Router();
var filter = require('../../../service/select/get-pro/get-pro-filter');

router.get('/:price_start/:price_end/:area_start/:area_end/:bedroom', function (req, res, next) {
    // var data=req.body
    var data1 = req.params.price_start
    var data2 = req.params.price_end
    var data3 = req.params.area_start
    var data4 = req.params.area_end
    var data5 = req.params.bedroom
    console.log(data1,data2,data3,data4,data5)
    filter.filter(data1,data2,data3,data4,data5, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;