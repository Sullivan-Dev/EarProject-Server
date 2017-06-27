var mysql = require('mysql');

module.exports = {
    login(req, res) {
        console.log(`Login Request`);
    },

    verify(req, res) {
        console.log(`Verify Request`);
    },

    signup(req, res) {
        console.log(`Signup Request`);
    },
}