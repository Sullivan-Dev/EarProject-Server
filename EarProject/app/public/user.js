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
        console.log(`Login Request`);

        var sentence = 'SELECT * FROM User';
        client.query(sentence, function(error, results) {
            response.writeHead(200, {'Content-Type' : 'Text/html'});
            response.end(results);
            console.log(results);
        })
    },

    verify(req, res) {
        console.log(`Verify Request`);
    },

    signup(req, res) {
        console.log(`Signup Request`);
    },
}