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
        var style11 = data.style11
        var style12 = data.style12
        var style13 = data.style13
        var style14 = data.style14
        var style15 = data.style15
        var style16 = data.style16
        var style17 = data.style17
        var style18 = data.style18
        var style19 = data.style19
        var style20 = data.style20

        var sql = `INSERT INTO style (pro_id, style1, style2, style3, style4, style5, style6, style7, style8, style9, style10,
                        style11, style12, style13, style14, style15, style16, style17, style18, style19, style20) 
                    VALUES (
                        (SELECT MAX(pro_id)
                        FROM property), 
                    ${data.style1}, 
                    ${data.style2}, 
                    ${data.style3},
                    ${data.style4}, 
                    ${data.style5},
                    ${data.style6}, 
                    ${data.style7}, 
                    ${data.style8},
                    ${data.style9}, 
                    ${data.style10},
                    ${data.style11}, 
                    ${data.style12}, 
                    ${data.style13},
                    ${data.style14}, 
                    ${data.style15},
                    ${data.style16}, 
                    ${data.style17}, 
                    ${data.style18},
                    ${data.style19}, 
                    ${data.style20});`
        console.log(sql)

        return db.query(sql,
            [style1, style2, style3, style4, style5, style6, style7, style8, style9, style10, style11, style12, style13, style14, style15, style16, style17, style18, style19, style20], callback);
    }

}
module.exports = property;



