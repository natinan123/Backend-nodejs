var db = require('../../../dbcon');
var avatar = {
    avatar: function (data, callback) {
        var pro_id = data;
        var sql = ` SELECT
        image.image_id,
        image.image1,
        image.image2,
        image.image3,
        image.image4,
        image.image5,
        image.image6,
        image.image7,
        image.image8,
        image.image9,
        image.image10,
        image.pro_id,
        image.image11,
        image.image12,
        image.image13,
        image.image14,
        image.image15,
        image.image16,
        image.image17,
        image.image18,
        image.image19,
        image.image20
        FROM
        image       
        WHERE pro_id = '${pro_id}'`
        console.log(sql);
        return db.query(sql, [pro_id], callback);
    }

}
module.exports = avatar;