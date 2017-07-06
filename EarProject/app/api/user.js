const { User } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/user`);
        
        const uid = req.body.uid || req.user.uid;
        const { did, mdn, password, name, gender } = req.body;
        
        return User
        .update({
            did: did,
            mdn: mdn,
            password: password,
            name: name,
            gender: gender
        }, {
            where: { uid: uid },
        })
        .then(() => {
            res.send({ message: '수정되었습니다.'});
        });
    },

    delete(req, res) {
        console.log(`DELETE /api/user`);

        const uid = req.body.uid || req.user.uid;

        return User.destroy({
            where: { uid: uid },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    }
}