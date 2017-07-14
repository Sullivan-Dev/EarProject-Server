const { user, translator } = require('../../app/public');
const { apiResponse } = require('../../http');
const express = require('express');
const router = express.Router();

router.post('/user/verify', apiResponse(user.verify))
      .post('/user/login',  apiResponse(user.login))
      .post('/user/signup', apiResponse(user.signup));

router.post('/translator/verify', apiResponse(translator.verify))
      .post('/translator/login',  apiResponse(translator.login))
      .post('/translator/signup', apiResponse(translator.signup));

module.exports = router;