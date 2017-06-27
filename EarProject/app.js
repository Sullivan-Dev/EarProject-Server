/**
 * Module dependencies.
 * 모듈을 추가합니다.
 */
var express = require('express');
var path = require('path');
var routes = require('./routes');

var client = mysql.createConnection({
    host : 'mail.chawoo.me',
    port: '3306',
    user: 'jaecheol',
    database: 'earporject',
    password: 'wocorl'
});

// 웹 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3030, () => {
  console.log(`Server is running on 3030 port`);
});

// app.use('/', routes);

app.get('/', function(request, response)  {
	console.log('/////');
    var sentence = 'SELECT * FROM User';
	client.query(sentence, function(error, results) {
		response.writeHead(200, {'Content-Type' : 'Text/html'});
		response.end(results);
		console.log(results);
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;