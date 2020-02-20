var express = require('express');
var router = express.Router();
var multer = require('multer');
var db = require('../../dbcon');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
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



/*multiple files upload*/
router.post('/', upload.array('blogimage', 10, 'username'), function (req, res, next) {
    var fileinfo = req.files;
    var email_id = req.body.username;
    // console.log(email_id);

    if (fileinfo[0] != null) {
        var name1 = req.files[0].filename;
    }
    if (fileinfo[1] != null) {
        var name2 = req.files[1].filename;
    }
    if (fileinfo[2] != null) {
        var name3 = req.files[2].filename;
    }
    if (fileinfo[3] != null) {
        var name4 = req.files[3].filename;
    }
    if (fileinfo[4] != null) {
        var name5 = req.files[4].filename;
    }
    if (fileinfo[5] != null) {
        var name6 = req.files[5].filename;
    }
    if (fileinfo[6] != null) {
        var name7 = req.files[6].filename;
    }
    if (fileinfo[7] != null) {
        var name8 = req.files[7].filename;
    }
    if (fileinfo[8] != null) {
        var name9 = req.files[8].filename;
    }
    if (fileinfo[9] != null) {
        var name10 = req.files[9].filename;
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
                "data": files,
                "username": email_id,
                
            });

            var sql = `INSERT INTO test_image2(email_id, pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10)
            VALUES('${email_id}','${name1}','${name2}','${name3}','${name4}','${name5}','${name6}','${name7}','${name8}','${name9}','${name10}')`
            console.log(sql);
            return db.query(sql, [email_id, name1, name2, name3, name4, name5, name6, name7, name8, name9, name10]);
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


