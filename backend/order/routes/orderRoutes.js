const router = require("express").Router();
let Order = require("../models/orderModel");

router.route("/placeOrder").post((req, res) => {

    function getUpcomingUTCWeekDay(weekday) {
        let date = new Date();
        let currentDay = date.getUTCDay();
        if (currentDay > weekday) {
            let daysTilNextWeek = 7 - currentDay;
            date.setUTCDate(date.getUTCDate() + daysTilNextWeek);
            currentDay = date.getUTCDay();
        }
        if (currentDay === weekday) {
            return date;
        }
        if (currentDay < weekday) {
            date.setUTCDate(date.getUTCDate() + (weekday - currentDay));
            return date;
        }
        return date;
    }

    const customerID = req.body.customerID
    const itemid = req.body.itemid
    const itemName = req.body.itemName
    const unitPrice = req.body.unitPrice
    const quantity = req.body.quantity
    const total = req.body.total
    const d = new Date();
    const placedDate = d.toString();
    const status = req.body.status;
    const d1 = getUpcomingUTCWeekDay(d);
    const estimatedDeliveryDate = d1.toString();
    const address = req.body.address;
    const telephone = req.body.telephone;

    const newOrder = new Order({
        customerID,
        itemid,
        itemName,
        unitPrice,
        quantity,
        total,
        placedDate,
        status,
        estimatedDeliveryDate,
        address,
        telephone
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
    const {customerID,itemid,itemName,unitPrice,quantity,total,placedDate,status,estimatedDeliveryDate,address,telephone}=req.body;

    const updateOrderAdmin={
        customerID,
        itemid,
        itemName,
        unitPrice,
        quantity,
        total,
        placedDate,
        status,
        estimatedDeliveryDate,
        address,
        telephone
     }
     const update=await OrderAdmin.findByIdAndUpdate(orderadminID,updateOrderAdmin).then(()=>{
        res.status(200).send({status:"Order Status Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.messege});
    })
})

module.exports = router;