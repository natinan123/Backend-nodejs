
var express = require('express');
var router = express.Router();
const fs = require('fs');
var partImage = require('../partImage');
const fileUrl = new URL('file:D:/backend_v2/Backend/router/test/1578321894495asdfarf.jpg');



router.get('/', function (req, res, next) {
    // var data=req.body



    // fs.readFile(fileUrl, function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    //     res.write(data);
    //     res.end();
    // });
    var image1 = fs.readFileSync(fileUrl ,'base64');
    res.json({image1})
    // console.log(image1);

});
module.exports = router;
