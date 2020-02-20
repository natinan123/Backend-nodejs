var db = require('../../../dbcon');
var property = {
    property: function (data, callback) {
        console.log(data);
        var pro_head = data.pro_head
        var pro_sell = data.pro_sell
        var pro_detail = data.pro_detail
        var pro_area = data.pro_area
        var pro_space = data.pro_space
        var price = data.price
        var pro_floor = data.pro_floor
        var pro_bedroom = data.pro_bedroom
        var pro_toilet = data.pro_toilet
        var latitude = data.latitude
        var longtitude = data.longtitude
        var email_id = data.email_id
        var location_id = data.location_id
        var type_id = data.type_id


        console.log.apply(sql)
        var sql = `INSERT INTO property (pro_head, pro_sell, pro_detail, pro_area, pro_space, price, pro_floor, 
            pro_bedroom, pro_toilet, pro_status,  pro_post, latitude, longtitude, email_id, location_id, type_id) 
            VALUES ('${data.pro_head}',
                    '${data.pro_sell}',
                    '${data.pro_detail}',
                    '${data.pro_area}',
                    '${data.pro_space}',
                    '${data.price}',
                    '${data.pro_floor}',
                    '${data.pro_bedroom}',
                    '${data.pro_toilet}',
                    'ร่าง',
                    NOW(),
                    '${data.latitude}',
                    '${data.longtitude}',
                    '${data.email_id}',
                    '${data.location_id}',
                    '${data.type_id}');`

        return db.query(sql, [pro_head, pro_sell, pro_detail, pro_area, pro_space, price, pro_floor, pro_bedroom,
            pro_toilet, latitude, longtitude, email_id, location_id, type_id], callback);

    }

}
module.exports = property;

