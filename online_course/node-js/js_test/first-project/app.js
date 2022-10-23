var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const templateRouter = require('./routes/template');

/* express session */
const session = require('express-session');

var app = express();

app.use(
  session({
    secret: 'hello world',
    resave: false, // session이 변경되지 않으면 저장하지 않도록 설정
    saveUninitialized: true,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 어떠한 요청에도 무조건 중간에 한번은 동작이 되도록 작성
// app.use((req, res, next) => {
//   console.log('middle ware');
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/template', templateRouter);

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

module.exports = app;
