const { User } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/user`);
        
        const id = req.body.id || req.user.common.id;
        const { districtId, mdn, password, name, gender } = req.body;

        return User
        .findOne({
            where: { id }
        })
        .then((user) => {
            user.update({
                districtId: ( districtId|| user.districtId ),
                mdn:        ( mdn       || user.mdn ),
                password:   ( password  || user.password ),
                name:       ( name      || user.name  ),
                gender:     ( gender    || user.gender ),
            });
        });
    },

    delete(req, res) {
        console.log(`DELETE /api/user`);

        const id = req.body.id || req.user.common.id;

        return User.destroy({
            where: { id },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    }
}