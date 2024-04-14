const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const usersRoute = require('./routes/users');
const indexRoute = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/api/users', usersRoute);
// app.use('/home', indexRoute);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecting Success'))
  .catch((err) => console.log(err));

app.listen('3000', () => {
  console.log('Server started on 3000')
});
