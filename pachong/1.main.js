let read = require('./1.read').read;
let write = require('./1.write').write;
let async = require('async');
let debug = require('debug')('crawl:main');
let Movie = require('./model').Movie;
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
function start(){
    async.waterfall([
        function (callback) {
            Movie.remove({},callback)
        },
        function(data,callback){
            read(url,callback);
        },
        function(movies,callback){
            write(movies,callback);
        }
    ],function(){
        debug('全部任务完成');
    });
}
start();