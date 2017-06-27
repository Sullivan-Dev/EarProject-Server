const { User } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    login(req, res) {
        console.log(`POST /public/login`);

        const {mdn, password} = req.body;
        console.log(mdn, password);
        
        User
        .findOne({
            where: { mdn, password }
        })
        .then((reply) => {
            if( !reply )    
                return res.status(500).send({message: '로그인 정보를 확인해주세요.'});
            
            const token = jwt.sign(reply.dataValues, config.JWT_TOKEN);
            res.send(token);
        });
    },

    verify(req, res) {
        console.log(`POST /public/verify`);

        const {token} = req.body;
        res.send(token);
    },

    signup(req, res) {
        console.log(`POST /public/signup`);

        const {name, mdn, password} = req.body;
        console.log(name, mdn, password);

        User
        .create({
            name: name,
            mdn: mdn,
            password: password
        })
        .then(() => {
            res.send('환영합니다 ' + name + '님');
        });
    },
}