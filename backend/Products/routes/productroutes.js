const router = require("express").Router();
const mongoose = require("mongoose");
const Product = require("../models/productmodel");
//IT21013300

//get all products
router.get('/getallProducts', async(req, res)=> {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})

//get product per seller
router.get('/:user', async (req, res) => {
  try {
    const products = await Product.find({ user: req.params.user });
    console.log(products);
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});


//create product
router.post('/addProducts', async(req, res)=> {
  try {
    const {productname,description,price,category,Stocks,image,user} = req.body;
    const product = await Product.create({productname,description,price,category,Stocks,image,user});
    console.log(product);
    const products = await Product.find();
    res.status(201).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})

//Delete product
router.delete("/deleteProduct/:id", async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await Product.findByIdAndRemove(id);
    await product.products.pull(product);
    await product.save();
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(500).json({ message: "Unable To Delete" });
  }

  return res.status(200).json({ message: "Successfull Delete" });
});

//Update product
router.put("/updateProduct/:id", async (req, res) => {
  const { id } = req.params;
  const {productname,description,price,category,Stocks,image,user} = req.body;
  let product;
  try {
    product = await Product.findByIdAndUpdate(id, {
      productname,
      description,
      price,category,
      Stocks,
      image,
      user
    });
  } catch (err) {
    return console.log(err);
  }
  if (!product) {
    return res.status(500).json({ message: "Unable To Update Product" + id });
  }
  return res.status(200).json({ product });
});


  module.exports = router;

