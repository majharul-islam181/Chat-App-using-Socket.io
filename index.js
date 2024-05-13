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

//Server to Client Data Transfer
// setTimeout(()=>{
//     socket.send('This is Majharul (Server ==> Client)')
// },10000);



//Using Pre define events
setInterval(()=>{
    let d = new Date();
    let t = d.getTime();
    socket.send(t);
},1000);


//Custom Events

setInterval(()=>{
    let d = new Date();
    let t = d.getTime();

    socket.emit('time', t)
})


//Showing Connection Dissconnect 
    console.log('New user Connected'),

    socket.on('disconnect', ()=>{
        console.log("Disconnected")
    })

})



app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')

})

expressServer.listen(3000,function(){
    console.log("Server is running, http://localhost:3000")
})

