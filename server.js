const express = require('express');
const path = require('path');
var app = express();
var server = app.listen(3000, function () {
  console.log('Listening on port 3000');
});
const io = require('socket.io')(server, {
  allowEIO3: true, // false by default
});
app.use(express.static(path.join(__dirname, ''))); //root파일을 시작으로 인식
var userConnections = [];
io.on('connection', (socket) => {
  console.log('socket id is ', socket.id);
});
