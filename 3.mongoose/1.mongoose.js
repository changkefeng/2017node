/**
 * Created by haoxiao on 2017-05-20.
 */
let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/2017mongodb");
let UserSchema = new mongoose.Schema({username:'string',age:'number'},{collection:'user'});
let UserModel = mongoose.model('User',UserSchema);
//增
/*UserModel.create({username:'fff',age:12},function (err,doc) {
   if(err){
       console.log(err)
   } else {
       console.log(doc)
   }
});*/
//删
/*UserModel.remove({username:'zzz'},function (err,result) {
    // { ok: 1, n: 2 } ok 1表示删除成功，n 2表示删除2条匹配记录
   console.log(result.result)
});*/
//改
UserModel.update({username:'fff'},{age:22},function (err,result) {
    console.log(result)
});
