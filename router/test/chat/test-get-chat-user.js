var express = require('express');
var router = express.Router();
var chat = require('../../../service/test/chat/test-get-chat-user');
const fs = require('fs');
var partImage = require('../../partImage');

router.get('/:source', function (req, res, next) {
    // var data = req.body
    // console.log(req.body);

    var data = req.params.source;


    chat.chat(data, (err, row) => {
        let result = []
        for (let i = 0; i < row.length; i++) {
            var element1 = row[i].sou_profile_pic;
            var element2 = row[i].des_profile_pic;
       
            result.push(data = {

                source: row[i].source,
                sou_fname: row[i].sou_fname,
                sou_lname: row[i].sou_lname,
                // sou_profile_pic: row[i].sou_profile_pic,
                descination: row[i].descination,
                des_fname: row[i].des_fname,
                des_lname: row[i].des_lname,
                // des_profile_pic: row[i].des_profile_pic,
                sou_profile_pic: fs.readFileSync(partImage.avatar + element1, 'base64'),
                des_profile_pic: fs.readFileSync(partImage.avatar + element2, 'base64')

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

