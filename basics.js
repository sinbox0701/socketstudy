const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('I am Server');
});

const io = socketio(server);

io.on('connection', (socket) => {
  //ws.send --> socket.emit
  socket.emit('welcome', { data: 'Welcome IO Server' });
  socket.on('message', (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
