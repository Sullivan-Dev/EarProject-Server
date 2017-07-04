// const _ = require('lodash');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { contacts, me, services, sessions, districts, user, translator } = require('../../app/api');
const config = require('../../config');

function verify (req, res, next) {
    var token = req.body.token || req.param('token');
    
    jwt.verify(token, config.JWT_TOKEN, (err, decoded) => {
        if( err )   {
            console.log(err);
            return res.status(403).send({message: '로그인이 필요한 서비스입니다.'});
        }
        req.user = decoded;

        next();
    });
}

router.get('/me', verify, me.getMe);

router.put('/user', verify, user.modify)
      .delete('/user', verify, user.delete);

router.put('/translator', verify, translator.modify)
      .delete('/translator', verify, translator.delete);

router.get('/district', districts.get)
      .get('/district/find', districts.find)
      .post('/district', districts.add)
      .delete('/district', districts.delete);

router.get('/services', services.get)
      .get('/services/find', services.find)
      .post('/services', services.add)
      .delete('/services', services.delete)
      .put('/services', services.modify);

module.exports = router;