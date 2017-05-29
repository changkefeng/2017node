/**
 * Created by haoxiao on 2017-05-28.
 */
let express = require('express');
let app = express();
let path = require('path');
let Message = require('./model').Message;
app.use(express.static(path.resolve('./node_modules')));
app.get('/',function (req,res) {
    res.sendFile(path.resolve('chats.html'))
});
let server = require('http').createServer(app);
let io = require('socket.io')(server);

let sockets = {};
io.on('connection',function(socket){
    //此变量代表当前用户的用户名
    let username;
    socket.on('join',function (roomName) {
        if(currentRoom){
            socket.leave(currentRoom);
        }
        socket.join(roomName);
        currentRoom = roomName;
    });
    socket.on('getAllMessage',function () {
         Message.find().sort({createAt:-1}).limit(20).exec(function (err,messages) {
             socket.emit('allMessage',messages)
         })
    });
    //当服务器端接收到客户端的消息之后执行回调函数 msg就是对应的消息
    socket.on('message',function(msg){
        if(username){//如果已经赋过值了
//广播给所有的人
            let reg = /@([^\s]+) (.+)/;
            let result = msg.match(reg);
            if(result){//私聊
                //得到了私聊的对方的用户名
                let toUser = result[1];
                //得到的私聊的内容
                let content = result[2];
                sockets[toUser].send({username,content,createAt:new Date().toLocaleString()});
            }else{
                // io.emit('message',{username,content:msg,createAt:new Date().toLocaleString()});
                Message.create({username,content:msg},function(err,message){
                    io.emit('message',message);
                })
            }
        }else{//如果还没有赋过值，还是undefined
            username = msg;
            //建立用户名和socket对象的对应关系
            sockets[username] = socket;
            //广播给所有的人
            io.emit('message',{username:'系统',content:`欢迎${username}来到聊天室`,createAt:new Date().toLocaleString()});
        }
    });
});
server.listen(8080);
