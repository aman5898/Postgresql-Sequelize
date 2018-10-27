var express = require('express');
var router = express.Router();
var obj = require('../db/data');


router.get('/', (req, res) => {
    res.send(obj);
});

router.post('/', (req, res) => {
    objGet = {
        Location: req.body.Location,
        Lattitude: req.body.Lattitude,
        Longitude: req.body.Longitude,
        TimeStamp: req.body.TimeStamp,
        Area: req.body.Area,
        AccuracyFactor:req.body.AccuracyFactor
    }
    console.log(objGet);
    obj = objGet;
    res.status(200).send("Data Added Successfully in DB" + obj); 
});

module.exports = router;