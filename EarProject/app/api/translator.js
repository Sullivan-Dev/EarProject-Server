const { Translator } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify(req, res) {
        console.log(`PUT /api/translator`);
        
        const id = req.body.id || req.user.translator.id;
        const { districtId, mdn, password, name, gender } = req.body;

        return Translator
        .findOne({
            where: { id }
        })
        .then((translator) => {
            translator.update({
                districtId: ( districtId || translator.districtId ),
                mdn:        ( mdn        || translator.mdn ),
                password:   ( password   || translator.password ),
                name:       ( name       || translator.name  ),
                gender:     ( gender     || translator.gender ),
            });
        });
    },

    delete(req, res) {
        console.log(`DELETE /api/translator`);

        const id = req.body.id || req.user.translator.id;

        return Translator
        .destroy({
            where: { id },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    }
}