const express = require('express');
const app = express();
const server = require('http').Server(app);  
const io = require('socket.io')(server);

let socket = null; // the socket

/**
 * serve all static files in dir
 */
app.use(express.static(`${__dirname}`));

/**
 * listen for root 
 */
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

/**
 * handle connection event
 */
io.on('connection', (newSocket) => {
  console.log('user connected');
  setupSocket(newSocket);
});

const setupSocket = (socket) => {
  socket.on('textEntered', (text) => {
    console.log('textEntered', text);
    alertClients(text);
  });
};

const alertClients = (text) => {
  io.emit('alertClients', text);
};

server.listen(3000);
