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

   // socket.emit(io.sockets.adapter.rooms)

   //io.emit(io.sockets.adapter.rooms)
   socket.emit(io.sockets.adapter.rooms)

    console.log(io.sockets.adapter.rooms)
    socket.on('connect', () => {
        console.log("This happened")
    })

    socket.on('disconnect', () =>{
        console.log('User Disconnected')
    })

    socket.on('join room', () => {
        console.log("Joined Room")
    })

    socket.on('create', function(room) {
        socket.join(room + "+")
        console.log(room)
    })

    socket.on('sendMessage', ({message, user}) => {
       // console.log("aaaaaaa")
        console.log('message: ' + message)
        console.log(user)
    })

    // socket.on('getRooms', ({rooms}) =>{
    //     rooms = io.sockets.adapter.rooms
        
        
    // })
    let rooms = io.sockets.adapter.rooms
    console.log(rooms + "THese the rooms")
    socket.emit("sentRooms", {roomList: JSON.stringify(Array.from(rooms))})
})

//setInterval(() => console.log(io.sockets.adapter.rooms), 5000)


server.listen(port, () => {
    console.log('listening on *:' + port);
  });