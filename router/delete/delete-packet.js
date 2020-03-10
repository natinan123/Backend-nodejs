var express = require('express');
var router = express.Router();
var packet = require('../../service/delete/delete-packet');

router.delete('/:packet_id', function (req, res, next) {
    var data = req.params
    console.log(data);
    packet.packet(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;