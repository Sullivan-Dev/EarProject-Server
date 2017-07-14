const { Translator } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify({ translator, id, districtId, mdn, password, name, gender }) {
        console.log(`PUT /api/translator`);
        
        if( !id )
            id = translator.id;

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
            })
            .then(() => {
                return { status: 200, message: '변경되었습니다.' };
            });
        });
    },

    delete({ translator, id }) {
        console.log(`DELETE /api/translator`);

        if( !id )
            id = translator.id;

        return Translator
        .destroy({
            where: { id },
        })
        .then(() => {
            return { status: 200, message: '삭제되었습니다.' };
        });
    }
}