// Author name: Ayesha Mohammed Azim Shaikh
// Student ID: 301166757
// Web App name: comp229008-f2021-301166757.herokuapp.com
// File name: routes/index.js

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
