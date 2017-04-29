/*******************************************************************************
 * Copyright (c) 2017 Pak Corp.
 *
 * All rights reserved. 
 *
 * Contributors:
 *   Malik Daud Ahmad Khokhar - Initial implementation
 *   Send money to other people in banks in other countries 
 *******************************************************************************/

const http = require('http');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const util = require('util');
const hfc = require('hfc');
const setup = require('./setup');

var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();
var userObj;

//// Set Server Parameters ////
var host = setup.SERVER.HOST;
var port = setup.SERVER.PORT;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.static('client/build'));
// app.use('/cc/summary', path.join(__dirname, 'cc_summaries') );												//for chaincode investigator

// app.use('/', index);
// app.use('/users', users);
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '', 'client/build', 'index.html'))
  // res.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.send('/test')
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// ============================================================================================================================
// 														Launch Webserver
// ============================================================================================================================
var server = http.createServer(app).listen(port, function() {});
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// process.env.NODE_ENV = 'production';
server.timeout = 240000;																							// Ta-da.
console.log('------------------------------------------ Server Up - ' + host + ':' + port + ' ------------------------------------------');
if(process.env.PRODUCTION) console.log('Running using Production settings');
else console.log('Running using Developer settings');