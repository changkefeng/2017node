let cheerio = require('cheerio');
let request = require('request');
let iconv = require('iconv-lite');
exports.read = function (url,callback) {
    request({uri:url,encoding:null},function (err,response,body) {
        body = iconv.decode(body,'gbk');
        let $ = cheerio.load(body);
        let movies = [];
        $('.keyword .list-title').each(function (index,item) {
            let $this = $(item);
            let category = {name:$this.text(),uri:$this.attr('href')}
            movies.push(category);
        });
        callback(err,movies);
    });
};

