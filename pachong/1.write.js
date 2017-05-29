/**
 * Created by haoxiao on 2017-05-29.
 */
let Movie = require('./model').Movie;
exports.write = function (movies,callback) {
    Movie.create(movies,callback)
};