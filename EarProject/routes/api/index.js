// const _ = require('lodash');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { contacts, me, services, sessions, districts, user, translator } = require('../../app/api');
const { apiResponse } = require('../../http');
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

router.get('/me', verify, apiResponse(me.getMe))
      .put('/me', verify, apiResponse(me.modify))
      .delete('/me', verify, apiResponse(me.delete));

router.put('/user', verify, apiResponse(user.modify))
      .delete('/user', verify, apiResponse(user.delete));

router.put('/translator', verify, apiResponse(translator.modify))
      .delete('/translator', verify, apiResponse(translator.delete));

router.get('/district', apiResponse(districts.getAll))
      .get('/district/:id', apiResponse(districts.get))
      .post('/district', apiResponse(districts.add))
      .delete('/district', apiResponse(districts.delete))
      .put('/district', apiResponse(districts.modify));

router.get('/services', apiResponse(services.getAll))
      .get('/services/:id', apiResponse(services.get))
      .get('/services/find', apiResponse(services.find))
      .post('/services', apiResponse(services.add))
      .delete('/services', apiResponse(services.delete))
      .put('/services', apiResponse(services.modify));

module.exports = router;