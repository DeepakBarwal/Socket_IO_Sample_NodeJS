const http = require('http');
const express = require('express');
const app = express();
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('connected to socket with id ', socket.id);
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3333, () => {
  console.log('http://localhost:3333');
});
