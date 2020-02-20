var express = require('express');
var router = express.Router();
var login = require('../../service/insert/login');

router.post('/', function (req, res, next) {
    var data = req.body
    console.log(data);
    login.login(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;