/**
 * Created by haoxiao on 2017-05-29.
 */
let parallel = require('async');
parallel.parallel([function (callback) {
    setTimeout(function () {
        console.log(1);
        callback(null,1)
    },3000)
},function (callback) {
    setTimeout(function () {
        console.log(2);
        callback(null,2)
    },2000)
},function (callback) {
    setTimeout(function () {
        console.log(3);
        callback(null,4);
    },1000)
}
],function (err,result) {
    console.log(err);
    console.log(result);
});