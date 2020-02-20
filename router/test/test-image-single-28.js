
var express = require('express');
var router = express.Router();
var multer = require('multer');
var db = require('../../dbcon');
var fs = require('fs')
var gm = require('gm');
const path = require('path')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/test/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)

  },
})



var upload = multer({
  storage: storage,
})



/* GET create blog. */
router.get('/create', function (req, res, next) {
  res.render('create', { title: 'Create Blog' });
});

/*single file upload*/
router.post('/', upload.single('image'), function (req, res, next) {
  console.log(req.file);

  

})

module.exports = router;
