const { Translator } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    login(req, res) {
        console.log(`POST /public/translator/login`);

        const { mdn, password } = req.body;
        console.log(mdn, password);
        
        return Translator
        .findOne({
            where: { mdn, password }
        })
        .then((reply) => {
            if( !reply )    
                return res.status(500).send({ message: '로그인 정보를 확인해주세요.' });
            console.log(reply.dataValues);
            
            jwt.sign(reply.dataValues, config.JWT_TOKEN, function(err, decode) {
                if( err )   {
                    console.log("Error failed: " + err);
                    return;
                }
                res.json({ token: decode });
            });
        });
    },

    verify(req, res) {
        console.log(`POST /public/translator/verify`);

        const { token } = req.body;

        jwt.verify(token, config.JWT_TOKEN, (err, decoded) => {
            if( err )   {
                console.log(err);
                return res.status(403).send({ message: '서버에 접속할 수 없습니다. 다시 로그인해주세요.' });
            }
            return res.json({ login : true });
        });
    },

    signup(req, res) {
        console.log(`POST /public/translator/signup`);

        const { name, mdn, password, gender, did } = req.body;
        console.log(name, mdn, password, gender, did); 

        return Translator
        .create({
            name: name,
            mdn: mdn,
            password: password,
            gender: gender,
            did: did
        })
        .then(() => {
            res.send({ message: '회원가입이 완료되었습니다.' });
        });
    },
}