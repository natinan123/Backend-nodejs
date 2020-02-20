var db = require('../../dbcon');
// import the require modules
const multer = require('multer');

// กรองรูป
const fileFilter = function (req, file, callback) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};

// define multer storage configuration     
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/');
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.originalname + '-' + Date.now() + '.jpg');
        var sql = `INSERT INTO test_image(image1)
                        VALUES('${file}','${file.originalname}');`
        console.log(sql);
        return db.query(sql);
        
    }

});






const upload = multer({ storage: storage, fileFilter: fileFilter });








module.exports = upload;

