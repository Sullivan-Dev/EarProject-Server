// const _ = require('lodash');
// const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
// const { me, users, translators, contacts, districts, services, sessions } = require('../../app/api');
const config = require('../../config');

function verify (req, res, next) {
  
}

// router.get('/me', verify, me.getMe);

// router.get('/pays', verify, pays.getList)
//       .post('/pays', verify, pays.payMoney)
//       .put('/pays', verify, pays.changeToUra);

// router.get('/banks', verify, banks.isBank);

// router.get('/uras', verify, uras.getUras)
//       .post('/uras', verify, verifyBank, uras.createUra)
//       .get('/uras/:id', verify, uras.getUra)
//       .delete('/uras/:id', verify, uras.refundUra)
//       .get('/uras/:id/paths', verify, paths.getPaths)
//       .put('/uras/:id', verify, uras.transferUra)
//       .post('/uras/divide', verify, verifyBank, uras.divideUra)
//       .post('/uras/merge', verify, verifyBank, uras.mergeUra);

// router.get('/paths', verify, paths.getPaths);

module.exports = router;