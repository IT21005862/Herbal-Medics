const router = require("express").Router();
let OrderAdmin = require("../models/OrderAdmin");

router.route("/add").post((req, res) => {
   /* let cartData;
    
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

/** */
    const customerID=req.body.customerID;
    const cartContents=req.body.cartContents;
    const placedDate = req.body.placedDate;
    const status = req.body.status;
    const estimatedDeliveryDate = req.body.estimatedDeliveryDate;
    const address = req.body.address;

    const newOrder = new OrderAdmin({
        customerID,
        cartContents,
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

router.route("/").get((req,res)=>{ //get all order details

    OrderAdmin.find().then((orderadmin)=>{
        res.json(orderadmin)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{ //update a order status
    let orderadminID=req.params.id;
    const {customerID,cartContents,placedDate,status,estimatedDeliveryDate,address}=req.body;

    const updateOrderAdmin={
        customerID,
        cartContents,
        placedDate,
        status,
        estimatedDeliveryDate,
        address
       
        
     }
     const update=await OrderAdmin.findByIdAndUpdate(orderadminID,updateOrderAdmin).then(()=>{
        res.status(200).send({status:"Order Status Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.messege});
    })
})


router.route("/delete/:id").delete(async(req,res) =>{//delete a order
    let orderadminID=req.params.id;

    await OrderAdmin.findByIdAndDelete(orderadminID).then(()=>{
        res.status(200).send({status:"Order Deleted"});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with delete user",error:err.messege});
    })
})

router.route("/get/:id").get(async(req,res)=>{ //get only one order details
    let orderadminID=req.params.id;
    const user=await OrderAdmin.findById(orderadminID).then((orderadmin)=>{
        res.status(200).send({status:"StockOrder Fetched",orderadmin});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with get user",error:err.messege});   
    })
})

module.exports=router;