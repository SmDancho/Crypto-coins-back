const Router = require('express');
const router = new Router();
const { registration, login,getMe } = require('./controller');
const { authValidation } = require('../../utils/validation');
const { validationResult } = require('express-validator');
const authMiddleware = require('../middleware.js');

router.post('/registration', authValidation, (req, res) => {
  const { errors } = validationResult(req);

  if (errors.length) {
    return res.json({ message: errors[0].msg });
  } else {
    registration(req, res);
  }
});

router.post('/login', (req, res) => {
  login(req, res);
});

router.post('/getMe', authMiddleware , (req, res) => {
  getMe(req, res);
});

module.exports = router;
