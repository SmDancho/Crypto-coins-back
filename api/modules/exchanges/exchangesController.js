const axios = require('axios');

const getAllexchanges = async (req, res) => {
  const { per_page } = req.query;
  try {
    const options = {
      url: 'https://coingecko.p.rapidapi.com/exchanges',

      headers: {
        'X-RapidAPI-Key': process.env.COINS_API_KEY,
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
      },
      params: {
        per_page,
      },
    };
    return axios.request(options).then((response) => res.json(response.data));
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { getAllexchanges };
