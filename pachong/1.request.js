/**
 * Created by haoxiao on 2017-05-29.
 */
let express = require('express');
let app = express();
let cheerio = require('cheerio');
app.listen(80);
let request = require('request');
let iconv = require('iconv-lite');
app.get('/',function (req,res) {
    request({uri:"http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1",encoding:null},function (err,response,body) {
        body = iconv.decode(body,'gbk');
        let $ = cheerio.load(body);
        $('.keyword .list-title').each(function (index,item) {
            let $this = $(item);
            let category = {name:$this.text(),uri:$this.attr('href')}
            console.log(category)
        });
        res.send(body);
        //err 错误对象 response响应对象 body响应体
    });
});
