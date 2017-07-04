const { District, User, Translator } = require('../../data');

module.exports = {
    get(req, res) {
        console.log(`GET /api/district`);
        
        const did = req.query.did;

        District
        .findOne({
            where: { did }
        })
        .then((reply) => {
            if( !reply )    
                return res.status(500).send({message: '존재하지 않는 센터입니다.'});
            res.send(reply.dataValues);
        });
    },

    add(req, res)   {
        console.log(`POST /api/district`);

        const {name, address, tel} = req.body;
        console.log(name, address, tel); 

        District
        .create({
            name: name,
            address: address,
            tel: tel,
        })
        .then(() => {
            res.send('추가되었습니다.');
        });
    },

    delete(req, res)  {
        console.log(`DELETE /api/district`);

        const { did } = req.body;

        District.destroy({
            where: { did: did },
        });

        res.json({ message: '삭제되었습니다.'});
    },

    find(req, res)  {
        console.log(`GET /api/district/find`);

        const did = req.query.did;
        let users, translators;        

        User
        .findAll({
            where: { did: did },
        })
        .then((reply) => {
            users = reply;
        })
        .then(() => {
            Translator
            .findAll({
                where: { did: did },
            })
            .then((reply) => {
                translators = reply;
            })
            .then(() => {
                res.json({ users: users, 
                           translators: translators });
            });
        });  
    },
}