const { Translator } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/translator`);
        
        const tid = req.user.tid;
        const { did, mdn, password, name, gender } = req.body;
        
        return Translator
        .update({
            did: did,
            mdn: mdn,
            password: password,
            name: name,
            gender: gender
        }, {
            where: { tid: tid },
        })
        .then(() => {
            res.send({ message: '변경되었습니다..'});
        });
    },

    delete(req, res) {
        console.log(`DELETE /api/translator`);

        const tid = req.user.tid;

        return Translator
        .destroy({
            where: { tid: tid },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    }
}