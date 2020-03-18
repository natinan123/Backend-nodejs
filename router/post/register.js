var express = require('express');
var router = express.Router();
var register = require('../../service/insert/register');


var image = "1576526679948avatar-icon-png-17.png"

router.post('/', function (req, res, next) {

    var dataimage = image;
    // console.log(dataimage);

    var data = req.body
    console.log(data);
    register.register(data, dataimage, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;