const { user } = require('../../app/public');
const express = require('express');
const router = express.Router();

router.post('/verify', user.verify)
      .post('/login', user.login);

router.post('/signup', user.signup);

module.exports = router;