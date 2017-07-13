const { User } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/user`);
        
        const uid = req.body.uid || req.user.uid;
        const { did, mdn, password, name, gender } = req.body;

        return User
        .findOne({
            where: { uid }
        })
        .then((user) => {
            user.update({
                did:        ( did       || user.did ),
                mdn:        ( mdn       || user.mdn ),
                password:   ( password  || user.password ),
                name:       ( name      || user.name  ),
                gender:     ( gender    || user.gender ),
            });
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