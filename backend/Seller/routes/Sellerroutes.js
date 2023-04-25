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

// Update isApproved field to true for a specific seller 
router.put('/approveSeller/:id', async (req, res) => {
  try {
    const seller = await User.findById(req.params.id);
    if (!seller) {
      return res.status(404).json({ message: 'seller not found' });
    }
    seller.isApproved = true;
    await seller.save();
    res.json(seller);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update isApproved field to false for a specific seller 
router.put('/rejectSeller/:id', async (req, res) => {
  try {
    const seller = await User.findById(req.params.id);
    if (!seller) {
      return res.status(404).json({ message: 'seller not found' });
    }
    seller.isApproved = false;
    await seller.save();
    res.json(seller);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


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

