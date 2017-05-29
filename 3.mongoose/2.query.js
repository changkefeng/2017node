/**
 * Created by haoxiao on 2017-05-20.
 */
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/query');
let User = mongoose.model('User',new mongoose.Schema({
    name:String,
    age:Number,
    ddd:Number,
    sss:Number
}));
/*let users = [];
for (let i=0;i<10;i++) {
    users.push({name: `zzz${i}`, age: i,add:i,sss:i})
}
//增
User.create(users,function (err,docs) {
    console.log(docs);
});*/
//查
/*User.findById('591fc71787d8240624d1ef88',function (err,data) {
    console.log(data);
});*/
/*User.find({},{age:0,add:0},function (err,data) {
    console.log(data);
});*/
let pageNum=2;
let pageSize=3;
User.find().sort({age:-1}).skip((pageNum-1)*pageSize).limit(pageSize).exec(function (err,result) {
    console.log(result);
});
