const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');
var app=express();
var server=http.createServer(app);
var io=socketIO(server); //Websocket server COmmunicate between server and the client

const publicPath=path.join(__dirname,'../public');
const port=process.env.PORT||3000;
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  //Similar to the client side socket
   console.log('New user connected');

   socket.on('disconnect',()=>{
     console.log('User disconnected');
   });
});

server.listen(port,()=>{
  console.log(`Server up on port ${port}`);
});

console.log(publicPath);
