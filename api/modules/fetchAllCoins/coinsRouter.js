const Router = require('express');
const router = new Router();

const {
  getAllCoins,
  getPrice,
  getCurrentCoinPrice,
} = require('./coinsController.js');

router.get('/getAllCoins', (req, res) => {
  getAllCoins(req, res);
});

router.get('/getPrices', (req, res) => {
  getPrice(req, res);
});

router.get('/CurrentCoinPrice', (req, res) => {
  getCurrentCoinPrice(req, res);
});

module.exports = router;
