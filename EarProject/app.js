/**
 * Module dependencies.
 * 모듈을 추가합니다.
 */
var express = require('express');
var path = require('path');
var routes = require('./routes');

// 웹 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3030, () => {
  console.log(`Server is running on 3030 port`);
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;