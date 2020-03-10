var express = require('express');
var router = express.Router();
const fs = require('fs');
var partImage = require('../../partImage');
var avatar = require('../../../service/select/get-image/get-name-pro');

router.get('/:pro_id', function (req, res) {

    var data = req.params.pro_id
    // console.log(data);
    avatar.avatar(data, function (err, row) {


        if (row[0].image1 != 'undefined') {
            var pro1 = row[0].image1;
            var image1 = fs.readFileSync(partImage.property + pro1, 'base64');
        }
        if (row[0].image2 != 'undefined') {
            var pro2 = row[0].image2;
            var image2 = fs.readFileSync(partImage.property + pro2, 'base64');
        }
        if (row[0].image3 != 'undefined') {
            var pro3 = row[0].image3;
            var image3 = fs.readFileSync(partImage.property + pro3, 'base64');
        }
        if (row[0].image4 != 'undefined') {
            var pro4 = row[0].image4;
            var image4 = fs.readFileSync(partImage.property + pro4, 'base64');
        }
        if (row[0].image5 != 'undefined') {
            var pro5 = row[0].image5;
            var image5 = fs.readFileSync(partImage.property + pro5, 'base64');
        }
        if (row[0].image6 != 'undefined') {
            var pro6 = row[0].image6;
            var image6 = fs.readFileSync(partImage.property + pro6, 'base64');
        }
        if (row[0].image7 != 'undefined') {
            var pro7 = row[0].image7;
            var image7 = fs.readFileSync(partImage.property + pro7, 'base64');
        }
        if (row[0].image8 != 'undefined') {
            var pro8 = row[0].image8;
            var image8 = fs.readFileSync(partImage.property + pro8, 'base64');
        }
        if (row[0].image9 != 'undefined') {
            var pro9 = row[0].image9;
            var image9 = fs.readFileSync(partImage.property + pro9, 'base64');
        }
        if (row[0].image10 != 'undefined') {
            var pro10 = row[0].image10;
            var image10 = fs.readFileSync(partImage.property + pro10, 'base64');
        }
        if (row[0].image11 != 'undefined') {
            var pro11 = row[0].image11;
            var image11 = fs.readFileSync(partImage.property + pro11, 'base64');
        }
        if (row[0].image12 != 'undefined') {
            var pro12 = row[0].image12;
            var image12 = fs.readFileSync(partImage.property + pro12, 'base64');
        }
        if (row[0].image13 != 'undefined') {
            var pro13 = row[0].image13;
            var image13 = fs.readFileSync(partImage.property + pro13, 'base64');
        }
        if (row[0].image14 != 'undefined') {
            var pro14 = row[0].image14;
            var image14 = fs.readFileSync(partImage.property + pro14, 'base64');
        }
        if (row[0].image15 != 'undefined') {
            var pro15 = row[0].image15;
            var image15 = fs.readFileSync(partImage.property + pro15, 'base64');
        }
        if (row[0].image16 != 'undefined') {
            var pro16 = row[0].image16;
            var image16 = fs.readFileSync(partImage.property + pro16, 'base64');
        }
        if (row[0].image17 != 'undefined') {
            var pro17 = row[0].image17;
            var image17 = fs.readFileSync(partImage.property + pro17, 'base64');
        }
        if (row[0].image18 != 'undefined') {
            var pro18 = row[0].image18;
            var image18 = fs.readFileSync(partImage.property + pro18, 'base64');
        }
        if (row[0].image19 != 'undefined') {
            var pro19 = row[0].image19;
            var image19 = fs.readFileSync(partImage.property + pro19, 'base64');
        }
        if (row[0].image20 != 'undefined') {
            var pro20 = row[0].image20;
            var image20 = fs.readFileSync(partImage.property + pro20, 'base64');
        }

        var result = []
        if (image1 != null) {
            result.push(
                { image: image1 }
            )
        }
        if (image2 != null) {
            result.push(
                { image: image2 }
            )
        }
        if (image3 != null) {
            result.push(
                { image: image3 }
            )
        }
        if (image4 != null) {
            result.push(
                { image: image4 }
            )
        }
        if (image5 != null) {
            result.push(
                { image: image5 }
            )
        }
        if (image6 != null) {
            result.push(
                { image: image6 }
            )
        }
        if (image7 != null) {
            result.push(
                { image: image7 }
            )
        }if (image9 != null) {
            result.push(
                { image: image9 }
            )
        }
        if (image10 != null) {
            result.push(
                { image: image10 }
            )
        }
        if (image11 != null) {
            result.push(
                { image: image11 }
            )
        }
        if (image12 != null) {
            result.push(
                { image: image12 }
            )
        }if (image13 != null) {
            result.push(
                { image: image13 }
            )
        }
        if (image14 != null) {
            result.push(
                { image: image14 }
            )
        }
        if (image15 != null) {
            result.push(
                { image: image15 }
            )
        }
        if (image16 != null) {
            result.push(
                { image: image16 }
            )
        }
        if (image17 != null) {
            result.push(
                { image: image17 }
            )
        }
        if (image18 != null) {
            result.push(
                { image: image18 }
            )
        }
        if (image19 != null) {
            result.push(
                { image: image19 }
            )
        }
        if (image20 != null) {
            result.push(
                { image: image20 }
            )
        }


        res.json(result)


        // var avatar = [{

        //     image: image1,
        //     image: image2,
        //     image: image3,
        //     image: image4,
        //     image: image5,
        //     image: image6,
        //     image: image7,
        //     image: image8,
        //     image: image9,
        //     image: image10,
        //     image: image11,
        //     image: image12,
        //     image: image13,
        //     image: image14,
        //     image: image15,
        //     image: image16,
        //     image: image17,
        //     image: image18,
        //     image: image19,
        //     image: image20,
        // }]
        // res.json(avatar)









    })


});





module.exports = router;

