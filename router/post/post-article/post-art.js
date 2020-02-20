var express = require('express');
var router = express.Router();
var multer = require('multer');
// var upgrade = require('../../../service/insert/post-image/post-pro-image');

var db = require('../../../dbcon');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/advertise/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({ storage: storage })

/* GET create blog. */
router.get('/create', function (req, res, next) {
    res.render('create', { title: 'Create Blog' });
});



router.post('/', upload.array('blogimage', 3, 'art_type', 'articl_head', 'art_detail1', 'art_detail2'), function (req, res, next) {
    var fileinfo = req.files;
    var email_id = req.body.username;

    console.log(req.files);
    console.log(req.body);
    var articl_head = req.body.articl_head
    var art_detail1 = req.body.art_detail1
    var art_detail2 = req.body.art_detail2
    var art_type = req.body.art_type


    if (fileinfo[0] != null) {
        var art_pic1 = req.files[0].filename;
        console.log(art_pic1);
    }
    if (fileinfo[1] != null) {
        var art_pic2 = req.files[1].filename;
        console.log(art_pic2);
    }
    if (fileinfo[2] != null) {
        var art_pic3 = req.files[2].filename;
        console.log(art_pic3);
    }


    try {
        const files = req.files;
        if (fileinfo == '') {
            res.status(400).json({
                "status": "failed",
                "code": "400",
                "message": "Please upload file"
            });
        }

        else if (fileinfo != null) {
            res.status(200).json({
                "status": "success",
                "code": "200",
                "message": "file uploaded successfully",
                "data": files


            });

            var sql = `INSERT INTO article (articl_head, art_detail1, art_detail2, art_pic1, art_pic2, art_pic3, art_type, art_date) 
                           VALUES('${articl_head}', '${art_detail1}', '${art_detail2}','${art_pic1}', 
                                   '${art_pic2}', '${art_pic3}', '${art_type}', NOW());`
            console.log.apply(sql)
            return db.query(sql, [articl_head, art_detail1, art_detail2, art_pic1, art_pic2, art_pic3, art_type]);

        }

    } catch (error) {
        res.status(200).json({
            "status": "failed",
            "code": "500",
            "message": error.message
        });
    }


})

module.exports = router;






