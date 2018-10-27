var express = require('express');
var router = express.Router();
var elevationData = require('../db/elevationData');
var dataArr = require('../db/data');

router.get('/', (req, res) => {

    console.log(dataArr.arr);

    elevationData.getDataLocation(dataArr.arr, (err, data) => {
        // console.log(data);

        count = 0;
        data.forEach(element => {
            element.dataValues.DangerLattitude = dataArr.arr[count].Lat;
            element.dataValues.DangerLongitude = dataArr.arr[count].Lng;
            // console.log(element.dataValues);
            count++;
        });
        res.send(data);
    })
});

// router.post('/', (req, res) => {
//     obj = {
//         Location: req.body.Location,
//         DangerLattitude: req.body.Lattitude,
//         DangerLongitude: req.body.Longitude        
//     }
//     console.log(obj.Location);

//     elevationData.getDataLocation(obj.Location, (err, success) => {
//         success.dataValues.DangerLattitude = obj.DangerLattitude;
//         success.dataValues.DangerLongitude = obj.DangerLongitude;
//         console.log(success);        
//         res.status(200).send(success);
//     });
// });


module.exports = router;