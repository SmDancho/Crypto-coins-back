const { generateAccessToken } = require('../../utils/token');
const bcrypt = require('bcrypt');

const { userById ,userByEmail , createUser } = require('../../config/qyeries');

async function registration(req, res) {
  try {
    const saltRounds = 10;
    const { name, email, password } = req.body;
    const candidate = await userByEmail(email);
    if (candidate) {
      return res.status(429).json({ message: 'user already exists' });
    }

    const Hashpassword = bcrypt.hashSync(password, saltRounds);
    const user = await createUser(name, email, Hashpassword);
    const token = generateAccessToken(user.id);
    return res.json({ user, token });
  } catch (err) {
    return res.json(err);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userByEmail(email);

    if (!user) {
      return res.json({ message: `${email} is no defined` }).status(400);
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.json({ message: `password is invalid` }).status(400);
    }

    const token = generateAccessToken(user._id);
    return res.json({ user, token, message: 'Login successful' });
  } catch (err) {
    return res.json(err);
  }
}

const getMe = async (req, res) => {
  try {

    const user = await userById(req.userId)
  
    if (!user) {
      return res.json({
        message: 'user is not defined',
      });
    }

    const token = generateAccessToken(user._id);
    return res.json({ user, token });
  } catch (error) {
    console.log(error);
    res.json({ message: 'Нет доступа.' });
  }
};

module.exports = {
  registration,
  login,
  getMe
};
