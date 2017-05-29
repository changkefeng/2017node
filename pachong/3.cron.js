/**
 * Created by haoxiao on 2017-05-29.
 */
let cronJob = require('cron').CronJob;
/*
* *代表所有的值
* 5 具体的值
* 5,10,15,20  枚举值
* 0-30 范围
* 星/5 每隔5秒一次
*
* */
let job  = new cronJob('0 0 22 * * 1,5',function () {
    console.log(new Date().toLocaleString())
});
job.start();