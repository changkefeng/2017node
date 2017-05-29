/**
 * Created by haoxiao on 2017-05-29.
 */
class test{
    constructor(){
        this.name = 'a';
        this.age = 22;
    }
    eat(){
        console.log(222);
    }
}

test.prototype.all = function () {
    console.log('all')
};
console.log(Object.getOwnPropertyNames(test.prototype));
var tests = new test();
for(var i in tests){
    console.log(i)


}