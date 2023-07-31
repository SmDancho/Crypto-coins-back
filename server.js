const express = require('express');
const cors = require('cors');

require('dotenv').config();

const coinsRouter = require('./api/modules/fetchAllCoins/coinsRouter');
const exchangesRouter = require('./api/modules/exchanges/exchangesRouter');
const newsRouter = require('./api/modules/news/newsRouter');
const authRouter = require('./auth/modules/model/router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/coins', coinsRouter);
app.use('/exchanges', exchangesRouter);
app.use('/news', newsRouter);
app.use('/auth', authRouter);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
