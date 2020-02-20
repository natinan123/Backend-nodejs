var express = require('express');
var router = express.Router();
const fs = require('fs');
var partImage = require('../../partImage');
var avatar = require('../../../service/select/get-image/get-name-avatar');

router.get('/:email_id', function (req, res) {

    var data = req.params.email_id
    // console.log(data);
    avatar.avatar(data, function (err, row) {
      
        var filename = row[0].profile_pic;
        var picBase64 = fs.readFileSync(partImage.avatar + filename, 'base64');
        var avatar = [{
            filename,
            picBase64
        }]
        res.json(avatar)



    })


});





module.exports = router;

