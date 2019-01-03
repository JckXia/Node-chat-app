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
    var li=$('<li></li>');
    li.text(`${data.from}: ${data.text}`);

    $('#messages').append(li);
  });


  //Standard event emitter
  socket.emit('CreateMessage',{
    from:'Jack',
    text:'Hey whats up Bob'
  },function(data){
    $('[name=message]').val('');
    console.log('Got it');
  });

  socket.on('broadcast',function(data){
    console.log(data);
  });

  $("#message-form").on('submit',function(e){
     e.preventDefault();
       var messageTextBox=    $('[name=message]');
     socket.emit('CreateMessage',{
       from:'User',
       text: messageTextBox.val()
     },function(){
     messageTextBox.val('');
     })
     console.log(e);
  });
