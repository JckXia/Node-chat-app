const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage}=require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

 
  socket.on('SendMsg',(data,callback)=>{
    console.log(data);
    callback({
      recieved:true
    });
  //  console.log(callback);
  })
  console.log('New user connected');

  socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));

  socket.broadcast.emit('broadcast', generateMessage('Admin','New user joined'));

  socket.on('CreateMessage', (message,callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from,message.text));
    callback({
      read:true,
      text:'Message created successfully'
    });  //Server acknowldeges respond have been recorded
  });

  socket.on('Check',(message,callback)=>{
    console.log('Check ',message);
    callback();
  });
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
