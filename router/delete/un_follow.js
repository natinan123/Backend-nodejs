var express = require('express');
var router = express.Router();
var unfollow = require('../../service/delete/un_follow');

router.post('/', function (req, res, next) {
    // var data = req.params

    var data = req.body
    console.log(data);
    unfollow.unfollow(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            // res.json(row);
            res.status(200).json({
                "status": "success",
                "code": "200",
                "message": "Unfollow successfully",
                "data": data

            });
        }


    })
});
module.exports = router;