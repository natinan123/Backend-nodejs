var db = require('../../../dbcon');
var property = {
    property: function (data, callback) {
        console.log(data);

        var style1 = data.style1
        var style2 = data.style2
        var style3 = data.style3
        var style4 = data.style4
        var style5 = data.style5
        var style6 = data.style6
        var style7 = data.style7
        var style8 = data.style8
        var style9 = data.style9
        var style10 = data.style10

        console.log(sql)

        var sql = `INSERT INTO style (pro_id, style1, style2, style3, style4, style5, style6, style7, style8, style9, style10) 
                    VALUES (
                        (SELECT MAX(pro_id)
                        FROM property), 
                    '${data.style1}', 
                    '${data.style2}', 
                    '${data.style3}',
                    '${data.style4}', 
                    '${data.style5}',
                    '${data.style6}', 
                    '${data.style7}', 
                    '${data.style8}',
                    '${data.style9}', 
                    '${data.style10}');`
        return db.query(sql,
            [style1, style2, style3, style4, style5, style6, style7, style8, style9, style10], callback);
    }

}
module.exports = property;

