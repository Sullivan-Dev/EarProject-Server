const { District } = require('../../data');

module.exports = {
    get(req, res) {
        console.log(`GET /public/district`);
        
        const did = req.param('did');

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
        console.log(`POST /public/district`);

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
        console.log(`DELETE /public/district`);

        const { did } = req.body;

        District.destroy({
            where: { did: did },
        });

        res.json({ message: '삭제되었습니다.'});
    }
}