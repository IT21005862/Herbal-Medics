const router = require('express').Router();
const User = require('../models/sellermodel');

//signup

router.post('/signup', async (req, res) => {
  const {SellerID, ShopName, name, Address,  email, password } = req.body;

  try {
    const user = await User.create({ SellerID, ShopName, name, Address,  email, password});
    res.json(user);
  } catch (e) {
    if (e.code === 11000) return res.status(400).send('Email already exists');
    res.status(400).send(e.message)
  }
})

//login

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.json(user)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

//get user

router.get('/', async (req, res) => {
  try {
    const users = await User.find({ isSeller: true});
    res.json(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
})
module.exports = router;

//get a user

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findById(id);
    res.json(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
})
module.exports = router;

