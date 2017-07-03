const { User } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/user/modify`);
        
        const uid = req.user.uid;
        const { did, mdn, password, name, gender } = req.body;
        
        User
        .update({
            did: did,
            mdn: mdn,
            password: password,
            name: name,
            gender: gender
        }, {
            where: { uid: uid },
        });
    },
}