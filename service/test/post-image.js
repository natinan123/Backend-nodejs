// var db = require('../../dbcon');
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
        const test = file.originalname + '-' + Date.now() + '.jpg';
        // console.log(test);
        callback(null, file.originalname + '-' + Date.now() + '.jpg');
        

        // var image = file.originalname + '-' + Date.now() + '.jpg';
        // console.log(image);
        
    },

})


const upload = multer({ storage: storage, fileFilter: fileFilter });


module.exports = upload;



