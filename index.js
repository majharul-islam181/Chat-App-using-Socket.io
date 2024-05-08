const express = require('express');
const app= express();
const http =  require('http')
const expressServer = http.createServer(app)


const {Server} = require('socket.io')

const io = new Server(expressServer);

//Pre define Events
//Event Handling(Server Side)
/*
    .Connect 
    .Message
    .Disconnect
    .Reconnect
    .Ping
    .Join
    .Leave

*/

//Event Handling(Client Side)
/* 
    .Connect
    .Connect_error
    .Connect_timeout
    .Reconnect

*/

io.on('connection', (socket)=>{
    console.log('New user Connected'),

    socket.on('disconnect', ()=>{
        console.log("Disconnected")
    })

})



app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')

})

expressServer.listen(3000,function(){
    console.log("Server is running")
})

