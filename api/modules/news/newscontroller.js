const axios = require('axios');

const getAllnews = async (req, res) => {
  const { pageSize, sortBy, language } = req.query;
  const options = {
    method: 'GET',
    url: 'https://newsapi.org/v2/everything',
    params: {
      pageSize,
      q: 'crypto',
      apiKey: process.env.NEWS_API_KEY,
      sortBy,
      language,
    },
  };
  return axios.request(options).then((response) => res.json(response.data));
};

const getsliderNews = async (req, res) => {
  const { pageSize, sortBy, language } = req.query;
  const options = {
    method: 'GET',
    url: 'https://newsapi.org/v2/everything',
    params: {
      pageSize,
      q: 'bitcoin',
      apiKey: process.env.NEWS_API_KEY,
      sortBy,
      language,
    },
  };
  return axios.request(options).then((response) => res.json(response.data));
};

module.exports = { getAllnews, getsliderNews };
