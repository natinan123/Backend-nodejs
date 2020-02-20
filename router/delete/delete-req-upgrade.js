var express = require('express');
var router = express.Router();
var upgrade = require('../../service/delete/delete-req-upgrade');

router.delete('/:requp_id', function (req, res, next) {
    var data = req.params
    console.log(data);
    upgrade.upgrade(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    })
});
module.exports = router;