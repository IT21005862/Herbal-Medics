const router = require("express").Router();
let Order = require("../models/orderModel");

router.route("/placeOrder").post((req, res) => {
    let cartData;
    
    const item1 = {
        id: 1,
        name: "Product Name 1",
        price: 10.78,
        quantity: 2
      };
      const item2 = {
        id: 2,
        name: "Product Name 2",
        price: 500.99,
        quantity: 3
      };

    cartData.data.push(item1);
    cartData.data.push(item2);

    const placedDate = req.body.placedDate;
    const status = req.body.status;
    const estimatedDeliveryDate = req.body.estimatedDeliveryDate;
    const address = req.body.address;

    const newOrder = new Order({
        customerID,
        cartContents: cartData,
        placedDate,
        status,
        estimatedDeliveryDate,
        address
    })

    newOrder.save().then(() => {
        res.json("Order Placed Successfully")
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;