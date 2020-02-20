var express = require('express');
var router = express.Router();
var chat = require('../../../service/test/chat/test-post-chat');

router.post('/', function (req, res, next) {
    var data = req.body
    // console.log(data);
    chat.chat(data, (err, row) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }


    })
});
module.exports = router;