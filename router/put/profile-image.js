
var express = require('express');
var router = express.Router();
var multer = require('multer');
var db = require('../../dbcon');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // อัพลงไป backend
    cb(null, 'uploads/avatar/')

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
router.put('/', upload.single('blogimage', 'username'), function (req, res, next) {
  var fileinfo = req.file;
  var image = req.file.filename;
  var email_id = req.body.username;


  // console.log(fileinfo);
  // console.log(req.file);
  // console.log(email_id, image);


  // res.send(fileinfo);
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
        "username": email_id,

      });

      var sql = `UPDATE customer 
                 SET profile_pic = '${image}'
                    WHERE email_id = '${email_id}' `
      console.log(sql);
      return db.query(sql, [image, email_id]);
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
