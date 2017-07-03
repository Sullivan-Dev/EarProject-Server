// const _ = require('lodash');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { contacts, me, services, sessions } = require('../../app/api');
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

module.exports = router;