var express = require('express');
var router = express.Router();
var SatelliteData = require('../db/SatelliteData');

router.get('/', (req, res) => {
    SatelliteData.getData((err, data) => {
        res.send(data);
    })   
});

router.post('/', (req, res) => {
    obj = {
        NELattitude: req.body.NELattitude,
        NELongitude: req.body.NELongitude,
        NWLattitude: req.body.NWLattitude,
        NWLongitude: req.body.NWLongitude,
        SELattitude: req.body.SELattitude,
        SELongitude: req.body.SELongitude,
        SWLattitude: req.body.SWLattitude,
        SWLongitude: req.body.SWLongitude,
        ImageName: req.body.ImageName,
        TimeStamp: req.body.TimeStamp
    }

    SatelliteData.InsertData(obj, (err, success) => {
        res.status(200).send("Data Added Successfully in DB " + success);
    });
});

module.exports = router;