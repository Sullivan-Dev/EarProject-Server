const { Translator } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/translator`);
        
        const tid = req.body.tid || req.translator.tid;
        const { did, mdn, password, name, gender } = req.body;

        return Translator
        .findOne({
            where: { tid }
        })
        .then((translator) => {
            translator.update({
                did:        ( did       || translator.did ),
                mdn:        ( mdn       || translator.mdn ),
                password:   ( password  || translator.password ),
                name:       ( name      || translator.name  ),
                gender:     ( gender    || translator.gender ),
            });
        });
    },

    delete(req, res) {
        console.log(`DELETE /api/translator`);

        const tid = req.body.tid || req.translator.tid;

        return Translator
        .destroy({
            where: { tid: tid },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    }
}