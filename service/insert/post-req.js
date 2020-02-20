// ! ยังใช้ไม่ได้

var db = require('../../dbcon');
var postprq = {
    postprq: function (data, callback) {
        console.log(data);
        var type_id = data.type_id
        var req_area_max = data.req_area_max
        var req_area_min = data.req_area_min
        var req_price_max = data.req_price_max
        var req_price_min = data.req_price_min
        var location_id = data.location_id
        var province_id = data.province_id
        var email_id = data.email_id

        var sql = `INSERT INTO requirement (type_id,
            req_area_max,
            req_area_min,
            req_price_max,
            req_price_min,
            location_id,
            province_id,
            email_id,
            req_date) 
            VALUES('${data.type_id}', 
                    '${data.req_area_max}',
                    '${data.req_area_min}',
                    '${data.req_price_max}',
                    '${data.req_price_min}',
                    '${data.location_id}',
                    '${data.province_id}',
                    '${data.email_id}',
                    NOW()	)`
        console.log(sql);
        return db.query(sql, [type_id, req_area_max, req_area_min, req_price_max, req_price_min, location_id, province_id, email_id,], callback);
    }

}
module.exports = postprq;

