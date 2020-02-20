var express = require('express');
var router = express.Router();
var multer = require('multer');
// var upgrade = require('../../../service/insert/post-image/post-pro-image');

var db = require('../../../dbcon');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/property/')
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
router.post('/', upload.array('blogimage', 20, 'pro_id'), function (req, res, next) {
    var fileinfo = req.files;
    var pro_id = req.body.pro_id;
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
    if (fileinfo[10] != null) {
        var name11 = req.files[10].filename;
    }
    if (fileinfo[11] != null) {
        var name12 = req.files[11].filename;
    }
    if (fileinfo[12] != null) {
        var name13 = req.files[12].filename;
    }
    if (fileinfo[13] != null) {
        var name14 = req.files[13].filename;
    }
    if (fileinfo[14] != null) {
        var name15 = req.files[14].filename;
    }
    if (fileinfo[15] != null) {
        var name16 = req.files[15].filename;
    }
    if (fileinfo[16] != null) {
        var name17 = req.files[16].filename;
    }
    if (fileinfo[17] != null) {
        var name18 = req.files[17].filename;
    }
    if (fileinfo[18] != null) {
        var name19 = req.files[18].filename;
    }
    if (fileinfo[19] != null) {
        var name20 = req.files[19].filename;
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
                "property": pro_id,

            });

            var sql = `
            INSERT INTO image(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
                image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, pro_id)
            VALUES('${name1}', '${name2}', '${name3}', '${name4}', '${name5}', '${name6}', '${name7}', '${name8}', '${name9}', '${name10}',
            '${name11}', '${name12}', '${name13}', '${name14}', '${name15}', '${name16}', '${name17}', '${name18}', '${name19}', '${name20}',
             (SELECT MAX(pro_id)
             FROM property
             ORDER BY pro_id DESC))`
            console.log(sql);
            return db.query(sql, [name1, name2, name3, name4, name5, name6, name7, name8, name9, name10,
                            name11, name12, name13, name14, name15, name16, name17, name18, name19, name20]);
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






