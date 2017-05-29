/**
 * Created by haoxiao on 2017-05-28.
 */
let wsServer = require('ws').Server;
//8080 80 http         21 ftp     22 ssh    443 https    53 dns
let server = new wsServer({port:8080});
server.on('connection',function (socket) {
    socket.on('message',function (msg) {
        console.log(msg);
        socket.send('n h '+msg)
    })
});