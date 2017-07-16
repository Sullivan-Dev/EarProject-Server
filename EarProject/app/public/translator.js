const { Translator } = require('../../data');
const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = {
    login({ mdn, password }) {
        console.log(`POST /public/translator/login`);
        console.log(mdn, password);
        
        return Translator
        .findOne({
            where: { mdn, password }
        })
        .then((translator) => {
            if( !reply )    
                return { status: 500, message: '로그인 정보를 확인해주세요.' };
            reply.dataValues.isTranslator = true;
            console.log(reply.dataValues);
            
            const p = new Promise((resolve, reject) => {
                jwt.sign(translator.dataValues, config.JWT_TOKEN, function(err, encoded) {
                    if( err )   {
                        reject(err);
                    }
                    resolve({ status: 200, data: encoded });
                });
            });
            return p;
        });
    },

    verify({ token }) {
        console.log(`POST /public/translator/verify`);

        const p = new Promise((resolve, reject) => {
            jwt.verify(token, config.JWT_TOKEN, (err, decoded) => {
                if( err )   {
                    reject(err);
                }
                resolve({ status: 200, data: decoded });
            });
        });
        return p;
    },

    signup({ name, mdn, password, gender, districtId }) {
        console.log(`POST /public/translator/signup`);
        console.log(name, mdn, password, gender, districtId); 

        return Translator
        .findOne({
            where: { mdn }
        })
        .then((translator) => {
            if( translator )  
                return { status: 500, message: '이미 가입된 회원입니다.' };
            
            return Translator
            .create({
                name,
                mdn,
                password,
                gender,
                districtId
            })
            .then(() => {
                return { status: 200, message: '가입되었습니다.' };
            });
        });
    },
}