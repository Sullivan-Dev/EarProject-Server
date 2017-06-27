const { User } = require('../../data');

module.exports = {
    login(req, res) {
        console.log(`Login Request`);
       
        User.findAll()
            .then(function(users)   {
                res.json(users);
            });
    },

    verify(req, res) {
        console.log(`Verify Request`);
    },

    signup(req, res) {
        console.log(`Signup Request`);
    },
}