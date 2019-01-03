 var socket=io();
$(document).ready(function(){

  $("button").click(function(e){
    e.preventDefault();
     var value=$("input").val();
   value=JSON.stringify(value);
      socket.emit("SendMsg",{text:value},function(status){
        console.log(status);
      });
     console.log(value);
   });
 });
