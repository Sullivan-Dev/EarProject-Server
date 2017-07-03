const { user, districts, translator } = require('../../app/public');
const express = require('express');
const router = express.Router();

router.post('/user/verify', user.verify)
      .post('/user/login', user.login)
      .post('/user/signup', user.signup);

router.post('/translator/verify', translator.verify)
      .post('/translator/login', translator.login)
      .post('/translator/signup', translator.signup);

router.get('/district', districts.getDistrict)
      .post('/district', districts.addDistrict);

module.exports = router;