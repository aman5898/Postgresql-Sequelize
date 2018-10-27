var express = require('express');
var router = express.Router();
var satelliteImages = require('./satelliteImages')
var elevationImages = require('./elevationImages')
var latestSatelliteImage = require('./latestSatelliteImage')

router.use('/satelliteImages', satelliteImages);
router.use('/elevationImages', elevationImages);
router.use('/latestSatelliteImage', latestSatelliteImage);

module.exports = router;