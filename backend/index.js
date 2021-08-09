const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const corsOptions={
    cors: true,
    origins:["http://localhost:3000"],
   }
   
const io = new Server(server, corsOptions);

const port = 4000



io.on('connection', (socket) => {
    console.log('a user connected')


    socket.on('disconnect', () =>{
        console.log('User Disconnected')
    })

    socket.on('join room', () => {
        console.log("Joined Room")
    })
})




server.listen(port, () => {
    console.log('listening on *:' + port);
  });