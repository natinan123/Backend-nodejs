var express = require('express');
var router = express.Router();
var chat = require('../../../service/test/chat/test-get-chat');
const fs = require('fs');
var partImage = require('../../partImage');
var moment = require('moment'); moment.locale('th'); // เวลา

router.get('/:source/:descination', function (req, res, next) {
    // var data = req.body
    // console.log(req.body);

    var data = req.params.source;
    var data2 = req.params.descination;

    chat.chat(data, data2, (err, row) => {

        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].profile_pic
            console.log(element);
            result.push(data = {
                message_id: row[i].message_id,
                source: row[i].source,
                descination: row[i].descination,
                mes_text: row[i].mes_text,
                time_stamp:  moment(row[i].time_stamp, "YYYYMMDD").fromNow(),
                fname: row[i].fname,
                lname: row[i].lname,
                // profile_pic: row[i].profile_pic,

                profile_pic: fs.readFileSync(partImage.avatar + element, 'base64')
            })
            // console.log(result)
        }



        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }


    })
});
module.exports = router;

