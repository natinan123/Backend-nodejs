var express = require('express');
var router = express.Router();
var multer = require('multer');
var db = require('../../../dbcon');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // อัพลงไป backend
        cb(null, 'uploads/packet/')

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

/*single file upload*/
router.post('/', upload.single('blogimage', 'pro_id'), function (req, res, next) {
    var fileinfo = req.file;
    var packet_image = req.file.filename;
    var pro_id = req.body.pro_id;

    console.log(fileinfo);

    try {
        const file = req.file;
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
                "data": file,
                "username": pro_id,

            });

            var sql = `INSERT INTO packet (packet_image, pro_id, packet_date) VALUES('${packet_image}', '${pro_id}', now()); `
            console.log(sql);
            return db.query(sql);

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
