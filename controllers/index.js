// Author name: Ayesha Mohammed Azim Shaikh
// Student ID: 301166757
// Web App name: comp229008-f2021-301166757.herokuapp.com
// File name: controllers/index.js

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
