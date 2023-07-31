const { secret } = require('../config/secret');
const jwt = require('jsonwebtoken');

function generateAccessToken(id) {
  const payload = { id };
  return jwt.sign(payload, secret, {
    expiresIn: '24h',
  });
}

module.exports = {generateAccessToken}