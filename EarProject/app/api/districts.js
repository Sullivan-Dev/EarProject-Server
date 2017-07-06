const { District, User, Translator } = require('../../data');

module.exports = {
    get(req, res) {
        console.log(`GET /api/district`);
        
        const did = req.query.did;

        return District
        .findOne({
            where: { did }
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
            name: name,
            address: address,
            tel: tel,
        })
        .then(() => {
            res.send({ message: '추가되었습니다.'});
        });
    },

    delete(req, res)  {
        console.log(`DELETE /api/district`);

        const { did } = req.body;

        return District.destroy({
            where: { did: did },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    },

    find(req, res)  {
        console.log(`GET /api/district/find`);

        const did = req.query.did;

        User
        .findAll({
            where: { did: did },
        })
        .then((users) => {
            return Translator
            .findAll({
                where: { did: did },
            })
            .then((translators) => {
                res.send({ sers: users, 
                           translators: translators });
            });
        });
    },

    modify(req, res)  {
        console.log(`PUT /api/district`);

        const { did, name, address, tel } = req.body;
        console.log(did, name, address, tel); 

        return District
        .update({
            name: name,
            address: address,
            tel: tel,
        }, {
            where: { did: did },
        })
        .then(() => {
            res.send({ message: '변경되었습니다..'});
        });
    },
}