var express = require('express');
var router = express.Router();
var chat = require('../../../service/test/chat/test-search-user');
const fs = require('fs');
var partImage = require('../../partImage');

router.get('/:search', function (req, res, next) {
    // var data = req.body
    // console.log(req.body);

    var data = req.params.search;

    chat.chat(data, (err, row) => {

        let result = []
        for (let i = 0; i < row.length; i++) {
            var element = row[i].profile_pic
            console.log(element);
            var partAddr = 'D:/project-property/Backend/uploads/avatar/';
            result.push(data = {

                email_id: row[i].email_id,
                fname: row[i].fname,
                lname: row[i].lname,
                cus_status: row[i].cus_status,
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

