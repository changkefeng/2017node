/**
 * Created by haoxiao on 2017-05-28.
 */
let Socket = require('ws');
let socket = new Socket('ws://localhost:8080');
socket.on('open',function () {
    console.log('链接服务器成功');
    socket.send('向服务器发送消息');
});
socket.on('message',function (msg) {
    console.log('接到消息'+msg)
});