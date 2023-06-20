const Router = require('express');
const router = new Router();

const { getAllnews, getsliderNews } = require('./newscontroller.js');

router.get('/Allnews', (req, res) => {
  getAllnews(req, res);
});

router.get('/sliderNews', (req, res) => {
  getsliderNews(req, res);
});

module.exports = router;
