const { user, districts } = require('../../app/public');
const express = require('express');
const router = express.Router();

router.post('/verify', user.verify)
      .post('/login', user.login);

router.post('/signup', user.signup);

router.get('/district', districts.getDistrict);
router.post('/district', districts.addDistrict);

module.exports = router;