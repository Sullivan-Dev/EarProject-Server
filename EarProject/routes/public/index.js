const { user, districts, translator } = require('../../app/public');
const express = require('express');
const router = express.Router();

router.post('/verify/user', user.verify)
      .post('/verify/translator', translator.verify);

router.post('/login/user', user.login)
      .post('/login/translator', translator.login);

router.post('/signup/user', user.signup)
      .post('/signup/translator', translator.signup);

router.get('/district', districts.getDistrict)
      .post('/district', districts.addDistrict);

module.exports = router;