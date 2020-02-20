var express = require('express');
var router = express.Router();
var Mypro = require('../../../../service/select/get-pro/get-pro-seller/get-count-pro');

router.get('/:email_id', function (req, res, next) {
    // var data=req.body
    var data = req.params.email_id
    Mypro.Mypro(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;