const { Translator } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/translator/modify`);
        
        const tid = req.user.tid;
        const { did, mdn, password, name, gender } = req.body;
        
        Translator
        .update({
            did: did,
            mdn: mdn,
            password: password,
            name: name,
            gender: gender
        }, {
            where: { tid: tid },
        });
    },

    delete(req, res) {
        console.log(`DELETE /api/translator`);

        const tid = req.user.tid;

        Translator.destroy({
            where: { tid: tid },
        });

        res.json({ message: '삭제되었습니다.'});
    }
}