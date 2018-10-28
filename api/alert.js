var express = require('express');
var router = express.Router();
var elevationData = require('../db/elevationData');
var dataArr = require('../db/data');

// gamble
arr = [{ "Location": "Alleppey", "Lattitude": 9.4981, "Longitude": 76.3388, "Resolution": 2, "SaferLattitude": 9.4981, "SaferLongitude": 76.3365, "Population": 174632, "Area": 46.18, "Density": 3781.55045474231, "createdAt": "2018-10-27T06:31:51.021Z", "updatedAt": "2018-10-27T06:31:51.021Z", "DangerLattitude": 9.3837, "DangerLongitude": 76.4334, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Changanacheri", "Lattitude": 9.4459, "Longitude": 76.541, "Resolution": 7, "SaferLattitude": 9.44246445585123, "SaferLongitude": 76.5589990623833, "Population": 127987, "Area": 13.9, "Density": 9207.69784172662, "createdAt": "2018-10-27T06:31:51.393Z", "updatedAt": "2018-10-27T06:31:51.393Z", "DangerLattitude": 9.397335179072822, "DangerLongitude": 76.40229078079965, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Chathurthiakary", "Lattitude": 9.939, "Longitude": 76.2705, "Resolution": 4, "SaferLattitude": 9.93710887478049, "SaferLongitude": 76.2807851785047, "Population": 2121923, "Area": 46.18, "Density": 45948.9605889996, "createdAt": "2018-10-27T06:31:51.399Z", "updatedAt": "2018-10-27T06:31:51.399Z", "DangerLattitude": 9.39889988840816, "DangerLongitude": 76.37897430374676, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Cochin", "Lattitude": 9.9312, "Longitude": 76.2673, "Resolution": 3, "SaferLattitude": 9.93790305214582, "SaferLongitude": 76.26092746366, "Population": 677243, "Area": 94.88, "Density": 7137.88996627319, "createdAt": "2018-10-27T06:31:51.461Z", "updatedAt": "2018-10-27T06:31:51.461Z", "DangerLattitude": 9.40372822798237, "DangerLongitude": 76.36740553186077, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Erattupetta", "Lattitude": 9.6858, "Longitude": 76.7751, "Resolution": 27, "SaferLattitude": 9.66030925270471, "SaferLongitude": 76.7865476503457, "Population": 21675, "Area": 14.24, "Density": 1522.12078651685, "createdAt": "2018-10-27T06:31:51.476Z", "updatedAt": "2018-10-27T06:31:51.476Z", "DangerLattitude": 9.412565209840226, "DangerLongitude": 76.51739061885235, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Idukki", "Lattitude": 9.9189, "Longitude": 77.1025, "Resolution": 717, "SaferLattitude": 11.0962692884748, "SaferLongitude": 77.7921913828646, "Population": 1112982, "Area": 4356, "Density": 255.505509641873, "createdAt": "2018-10-27T06:31:51.525Z", "updatedAt": "2018-10-27T06:31:51.525Z", "DangerLattitude": 9.411966275619525, "DangerLongitude": 76.36311920971934, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Muvattupula", "Lattitude": 9.9894, "Longitude": 76.579, "Resolution": 27, "SaferLattitude": 9.97298773470215, "SaferLongitude": 76.648424954907, "Population": 33397, "Area": 13.18, "Density": 2533.91502276176, "createdAt": "2018-10-27T06:31:51.743Z", "updatedAt": "2018-10-27T06:31:51.743Z", "DangerLattitude": 9.423963071014375, "DangerLongitude": 76.51791258366298, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Piravam", "Lattitude": 9.8731, "Longitude": 76.492, "Resolution": 18, "SaferLattitude": 9.85940285019587, "SaferLongitude": 76.5382833032713, "Population": 27229, "Area": 29.36, "Density": 927.41825613079, "createdAt": "2018-10-27T06:31:51.910Z", "updatedAt": "2018-10-27T06:31:51.910Z", "DangerLattitude": 9.427956882973351, "DangerLongitude": 76.51719352090367, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Vazhakulam", "Lattitude": 9.947, "Longitude": 76.6359, "Resolution": 32, "SaferLattitude": 9.89203182727056, "SaferLongitude": 76.5995579498135, "Population": 18358, "Area": 11.12, "Density": 1650.89928057554, "createdAt": "2018-10-27T06:31:52.190Z", "updatedAt": "2018-10-27T06:31:52.190Z", "DangerLattitude": 9.441171475990545, "DangerLongitude": 76.5802770778466, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }]


router.get('/', (req, res) => {

    res.send({
        obj:arr
    })

    // console.log(dataArr);

    // elevationData.getDataLocation(dataArr.arr, (err, data) => {
    //     console.log(data);

    //     count = 0;
    //     data.forEach(element => {
    //         element.dataValues.DangerLattitude = dataArr.arr[count].DangerLattitude;
    //         element.dataValues.DangerLongitude = dataArr.arr[count].DangerLongitude;
    //         element.dataValues.TimeStamp = dataArr.arr[count].TimeStamp;
    //         element.dataValues.AccuracyFactor = dataArr.arr[count].AccuracyFactor;
    //         element.dataValues.WaterArea = dataArr.arr[count].WaterArea;
    //         element.dataValues.CriticalFactor = dataArr.arr[count].CriticalFactor;
    //         element.dataValues.Alert = dataArr.arr[count].Alert;gi


    //         console.log(element.dataValues);
    //         count++;
    //     });
    //     res.send(data);
    // })
});

//gamble

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