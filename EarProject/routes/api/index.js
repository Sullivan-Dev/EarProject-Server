// const _ = require('lodash');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { contacts, me, services, sessions, districts, user, translator } = require('../../app/api');
const config = require('../../config');

function verify (req, res, next) {
    var token = req.body.token || req.query.token;
    
    jwt.verify(token, config.JWT_TOKEN, (err, decoded) => {
        if( err )   {
            console.log(err);
            return res.status(403).send({message: '로그인이 필요한 서비스입니다.'});
        }
        console.log(decoded);
        
        req.user = {};
        if( decoded.isUser )   {   // 유저인 경우
            req.user.common = decoded;
        }
        else if( decoded.isTranslator )   {   // 통역사인 경우
            req.user.translator = decoded;
        }

        next();
    });
}

router.get('/me', verify, me.getMe)
      .put('/me', verify, me.modify)
      .delete('/me', verify, me.delete);

router.put('/user', verify, user.modify)
      .delete('/user', verify, user.delete);

router.put('/translator', verify, translator.modify)
      .delete('/translator', verify, translator.delete);

router.get('/district', districts.get)
      .post('/district', districts.add)
      .delete('/district', districts.delete)
      .put('/district', districts.modify);

router.get('/services', services.getAll)
      .get('/services/:sid', services.get)
      .get('/services/find', services.find)
      .post('/services', services.add)
      .delete('/services', services.delete)
      .put('/services', services.modify);

module.exports = router;