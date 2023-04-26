const router = require("express").Router();
let Item = require("../models/cartModel");

//add items to cart
router.route("/addCart").post((req,res)=>{
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const unitPrice = req.body.unitPrice;
    const quantity = req.body.quantity;
    const total = req.body.total;

    const newItem = new Item({
        itemId,
        itemName,
        unitPrice,
        quantity,
        total
    })

    newItem.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//view all items in cart
router.route("/viewCart").get((req,res)=>{
    Item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err);
    })
})

//update cart item
router.route("/updateCart/:id").put(async(req, res) =>{
    let itemId = req.params.id;

    const itemName = req.body.itemName;
    const unitPrice = req.body.unitPrice;
    const quantity = req.body.quantity;
    const total = req.body.total;

    const updatedItem = new Item({
        itemName,
        unitPrice,
        quantity,
        total
    })

    await Item.findByIdAndUpdate(itemId, updatedItem)
    .then(() =>{
        res.status(200).send({status: "Item updated",})
    }).catch((err) => {
        console.log(err);
    res.status(500).send({status: "Error with upading data", error: err.message});
})   
}) 

//delete cart item
router.route("/deleteitem/:id").delete(async(req,res) =>{
    let itemId = req.params.id;

    await Item.findByIdAndDelete(itemId)
    .then(() => {
        res.status(200).send({status: "Item deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete package", error: err.message});
    })
})

//retreive cart data by custeomer reference
router.route("/getCustomerCart/:id").get(async(req,res) =>{
    let CustomerID = req.params.id;//customer reference id
    const items = await Item.find({ CustomerID:  CustomerID })
    .then((items) => {
        res.status(200).send({status: "Items fetched", items});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get package", error: err.message});
    })
})

module.exports = router;