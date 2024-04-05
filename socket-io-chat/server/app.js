const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io')
require('dotenv').config();
const indexRouter = require('./routes/index');

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

app.use('/', indexRouter);

io.on('connection', socket => {
  console.log('New WS connection...');
})

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

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('joinRoom', (room) => {
//     if (chatRooms.includes(room)) {
//       socket.join(room);
//       console.log(`User joined room ${room}`);
//     } else {
//       console.log(`Room ${room} does not exist`);
//     }
//   });

//   socket.on('chatMessage', (data) => {
//     io.to(data.room).emit('message', data.message);
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });