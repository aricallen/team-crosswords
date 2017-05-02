(function() {
  const socket = io.connect('/chatroom');

  const chat = document.getElementById('chat');
  const serverMessages = document.getElementById('server-messages');

  chat.addEventListener('keyup', (e) => {
    // add text to the server-messages
    if (e.code === 'Enter') {
      const lastMessage = `<br/>${e.target.value}`;
      // update the server
      socket.emit('textEntered', lastMessage);
      // clear out the textarea
      e.target.value = '';
    }
  });

  socket.on('alertClients', (lastMessage) => {
    serverMessages.innerHTML += lastMessage;
  });

  socket.on('test', (data) => {
    console.log(`data:`, data);
  });

  socket.on('init', (data) => {
    console.log(`data:`, data);
  });
  
  socket.on('privateMessage', () => {
    console.log('received private message');
  });
})();
