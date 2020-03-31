// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var filmSchema = mongoose.Schema({
   
    Rank: Number,
    Title: String,
    Genre: [String],
    Description: String,
    Director: String,
    Actors: [String],
    Year: Number,
    Runtime: Number,
    Rating: Number,
    Votes: Number,
    Revenue: Number,
    Metascore: Number,
});

// Export Contact model
var Film = module.exports = mongoose.model('film', filmSchema,'Film');


