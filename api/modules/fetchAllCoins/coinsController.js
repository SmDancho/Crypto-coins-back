const axios = require('axios');

const getAllCoins = async (req, res) => {
  const { timePeriod, limit, orderBy, orderDirection, offset } = req.query;

  try {
    const options = {
      url: 'https://fanated.com/coingecko/mock',
      // headers: {
      //   'X-RapidAPI-Key': process.env.COINS_API_KEY,
      //   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      // },
      params: {
        timePeriod,
        orderBy,
        orderDirection,
        limit,
        offset,
      },
    };
    return axios.request(options).then((response) => res.json(response.data));
  } catch (error) {
    return res.json(error);
  }
};

const getPrice = (req, res) => {
  try {
    const { timePeriod, limit, orderDirection, offset, coinId } = req.query;
    const options = {
      url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/exchanges`,
      headers: {
        'X-RapidAPI-Key': process.env.COINS_API_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
      params: {
        timePeriod,
        orderDirection,
        limit,
        offset,
      },
    };
    axios.request(options).then((response) => res.json(response.data));
  } catch (error) {
    return res.json(error);
  }
};

const getCurrentCoinPrice = (req, res) => {
  try {
    const { timePeriod, limit, orderDirection, offset, coinId } = req.query;
    const options = {
      url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
      headers: {
        'X-RapidAPI-Key': process.env.COINS_API_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
      params: {
        timePeriod,
        orderDirection,
        limit,
        offset,
      },
    };

    axios.request(options).then((response) => res.json(response.data));
  } catch (error) {
    return res.json(error);
  }
};
module.exports = { getAllCoins, getPrice, getCurrentCoinPrice };
