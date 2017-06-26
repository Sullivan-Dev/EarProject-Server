const { user } = require('../../app/public');
const express = require('express');
const router = express.Router();

router.get('/login/:token', user.login)
      .post('/login', user.verify);

router.post('/signup', user.signup);

module.exports = router;