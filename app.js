const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs=require('fs')
const authenticate=require("./middlewares/authenticate").authenticate
const passwordRouter = require('./routes/password');
const signupRouter=require('./routes/signup')
const loginRouter=require('./routes/login')
const usersRouter=require('./routes/wallet')
const indexRouter=require("./routes/index")
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
const signupValid=require("./middlewares/signupvalidation").signupvalid
const passValid=require("./middlewares/passwordvalidation").passValid
app.use(logger('common',{stream:fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',indexRouter)
app.use('/createpassword',passValid, passwordRouter);
app.use('/signup',signupValid,signupRouter)
app.use('/login',loginRouter)
app.use('/wallet',authenticate ,usersRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
