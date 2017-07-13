const { District, User, Translator } = require('../../data');

module.exports = {
    get(req, res) {
        console.log(`GET /api/district`);
        
        const id = req.query.id;

        return District
        .findOne({
            where: { id }
        })
        .then((reply) => {
            if( !reply )    
                return res.status(500).send({message: '존재하지 않는 센터입니다.'});
            res.send( reply.dataValues );
        });
    },

    add(req, res)   {
        console.log(`POST /api/district`);

        const { name, address, tel } = req.body;
        console.log(name, address, tel); 

        return District
        .create({
            name,
            address,
            tel,
        })
        .then(() => {
            res.send({ message: '추가되었습니다.'});
        });
    },

    delete(req, res)  {
        console.log(`DELETE /api/district`);

        const { id } = req.body;

        return District.destroy({
            where: { id },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    },

    find(req, res)  {
        console.log(`GET /api/district/find`);

        const id = req.query.id;

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
                res.send({ users: users, 
                           translators: translators });
            });
        });
    },

    modify(req, res)  {
        console.log(`PUT /api/district`);

        const { id, name, address, tel } = req.body;
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
            res.send({ message: '변경되었습니다..'});
        });
    },
}
