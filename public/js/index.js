var socket = io();

socket.on('connect',function(){
       console.log('Connected to server');
  });

  socket.on('disconnect',function(){
    console.log(`Disconnected from server`);
  });


 
 //Listens for custom events

  socket.on('newMessage',function(data){
    console.log(data);
  });
  socket.emit('CreateMessage',{
    from:'Jack',
    text:'Hey whats up Bob'
  });

  socket.on('broadcast',function(data){
    console.log(data);
  });
