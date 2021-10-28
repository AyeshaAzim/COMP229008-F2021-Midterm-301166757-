// Author name: Ayesha Mohammed Azim Shaikh
// Student ID: 301166757
// Web App name: comp229008-f2021-301166757.herokuapp.com
// File name: models/book.js

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);