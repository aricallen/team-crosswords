const socket = io.connect('/');

const chat = document.getElementById('chat');
const serverMessages = document.getElementById('server-messages');

chat.addEventListener('keyup', (e) => {
  socket.emit('textEntered', e.target.value);
  console.log(`e.target.value:`, e.target.value);
});

socket.on('alertClients', (text) => {
  serverMessages.innerText = text;
});