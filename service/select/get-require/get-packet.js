var db = require('../../../dbcon');
var packet = {
    packet: function ( callback) {

        

        var sql = `SELECT
                            packet.packet_id,
                            packet.packet_image,
                            packet.pro_id,
                            SUBSTRING(packet.packet_date,1,10) AS packet_date,
                            property.pro_head,
                            type_pro.type_id,
                            type_pro.type_name,
                            property.pro_sell,
                            property.pro_area,
                            property.pro_space,
                            property.price,
                            property.pro_floor,
                            property.pro_bedroom,
                            property.pro_toilet,
                            property.pro_status,
                            SUBSTRING(property.pro_post,1,10) AS pro_post,
                            SUBSTRING(property.end_date,1,10) AS end_date,
                            property.pro_views,
                            property.longtitude,
                            property.latitude,
                            customer.email_id,
                            customer.fname,
                            customer.lname,
                            customer.id_line,
                            customer.facebook,
                            customer.profile_pic,
                            customer.cus_status,
                            customer.phone,
                            image.image1,
                            property.location_id,
                            location.loc_name,
                            province.province_id,
                            province.provin_name,
                            zone.zone_id,
                            zone.zone_name
                            FROM
                            packet
                            INNER JOIN property ON packet.pro_id = property.pro_id
                            LEFT JOIN image ON image.pro_id = property.pro_id
                            LEFT JOIN style ON style.pro_id = property.pro_id
                            LEFT JOIN customer ON property.email_id = customer.email_id
                            LEFT JOIN location ON property.location_id = location.location_id
                            LEFT JOIN type_pro ON property.type_id = type_pro.type_id
                            INNER JOIN province ON location.province_id = province.province_id
                            INNER JOIN zone ON province.zone_id = zone.zone_id
                            WHERE property.pro_status = 'เผยแพร่'
                            ORDER BY packet_date ASC`
        console.log(sql);
        return db.query(sql, callback);
    }

}
module.exports = packet;