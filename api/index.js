var express = require('express');
var router = express.Router();
var satelliteImages = require('./satelliteImages')
var elevationImages = require('./elevationImages')

router.use('/satelliteImages', satelliteImages);
router.use('/elevationImages', elevationImages);

module.exports = router;