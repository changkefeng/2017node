/**
 * Created by haoxiao on 2017-05-29.
 */
let async = require('async');
console.time('con');
async.waterfall(
    [
        function egg(callback) {
            setTimeout(function () {
                callback(null,'鸡蛋');
            },2000)
        },
        function eggBin(data,callback) {
            setTimeout(function () {
                callback(null,'炒'+data);
            },4000)
        },
        function eat(data,callback) {
            console.timeEnd('con');
            callback(null,'吃'+data);
        }
    ],
    function (err,result) {
        console.log(result);
    }
);