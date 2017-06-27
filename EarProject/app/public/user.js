var mysql = require('mysql');

var client = mysql.createConnection({
    host : 'mail.chawoo.me',
    port: '3306',
    user: 'jaecheol',
    database: 'earporject',
    password: 'wocorl'
});

module.exports = {
    login(req, res) {
        var sentence = 'SELECT * FROM User';
        client.query(sentence, function(error, results) {
            response.writeHead(200, {'Content-Type' : 'Text/html'});
            response.end(results);
        })
    },

    verify(req, res) {

    },

    signup(req, res) {

    },
}