/**
 * Created by haoxiao on 2017-05-29.
 */
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/2017crawl');
let movieSchma = mongoose.Schema({
    name:String,
    url:String
});
let movie = mongoose.model('movie',movieSchma);
exports.Movie = movie;