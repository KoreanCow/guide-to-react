const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const server = http.createServer(app);
// const io = socketio(server);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true // 필요에 따라 설정
  }
});

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ---------------------------------------
const chatRooms = [];
app.get('/', (req, res) => {
  res.json(chatRooms);
});

app.post('/', (req, res) => {
  const body = req.body;
  const roomName = body.roomName;
  chatRooms.push(roomName);

  const namespace = io.of(`/${roomName}`);

  namespace.on('connection', (socket) => {
    console.log(`New connection in ${roomName} room post`);
    socket.on('message', ({ username, message }) => {
      console.log(username, message)
      namespace.emit('message', { username, message });
    })
    socket.on('disconnect', () => {
      console.log(`User disconnected from ${roomName}`);
    });
  });


  res.json(chatRooms);
});
// ---------------------------------------
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})

module.exports = { app, io }
