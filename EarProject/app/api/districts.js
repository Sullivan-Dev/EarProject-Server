const { District, User, Translator } = require('../../data');

module.exports = {
    getAll({ })  {
        console.log(`GET /api/district`);

        return District
        .findAll({
            where: { },
        })
        .then((districts) => {
            if( !districts )
                return { status: 404, message: '센터가 존재하지 않습니다.' };
            else
                return { status: 200, data: districts };
        });
    },

    get({ id }) {
        console.log(`GET /api/district/id`);

        return District
        .findOne({
            where: { id }
        })
        .then((district) => {
             if( !district )    
                return { status: 404, message: '존재하지 않는 센터입니다.' };
            else
                return { status: 200, data: district.dataValues };
        });
    },

    add({ name, address, tel })   {
        console.log(`POST /api/district`);
        console.log(name, address, tel); 

        return District
        .create({
            name,
            address,
            tel,
        })
        .then(() => {
            return { status: 200, message: '추가되었습니다.' };
        });
    },

    delete({ id })  {
        console.log(`DELETE /api/district`);

        return District.destroy({
            where: { id },
        })
        .then(() => {
            return { status: 200, message: '삭제되었습니다.' };
        });
    },

    find({ id })  {
        console.log(`GET /api/district/find`);

        User
        .findAll({
            where: { id: id },
        })
        .then((users) => {
            return Translator
            .findAll({
                where: { id },
            })
            .then((translators) => {
                return { status: 200, data: { users: users, 
                                              translators: translators } };
            });
        });
    },

    modify({ id, name, address, tel })  {
        console.log(`PUT /api/district`);
        console.log(id, name, address, tel); 

        return District
        .update({
            name,
            address,
            tel,
        }, {
            where: { id },
        })
        .then(() => {
            return { status: 200, message: '변경되었습니다.' };
        });
    },
}
