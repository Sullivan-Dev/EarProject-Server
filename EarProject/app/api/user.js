const { User } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    modify({ common, id, districtId, mdn, password, name, gender }) {
        console.log(`PUT /api/user`);
        
        if( !id )
            id = common.id;

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
            })
            .then(() => {
                return { status: 200, message: '변경되었습니다.' };
            });
        });
    },

    delete({ common, id }) {
        console.log(`DELETE /api/user`);

        if( !id )
            id = common.id;

        return User.destroy({
            where: { id },
        })
        .then(() => {
            return { status: 200, message: '삭제되었습니다.' };
        });
    }
}