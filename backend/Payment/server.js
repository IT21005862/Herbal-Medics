const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();
const Stripe = require('stripe');  //Payment gateway stripe is being integrated
const stripe = Stripe('sk_test_51LhBwPD1ftP7zi2EFzCqknBRwERKsNxtKCEJGL7I6ng3mSy6nOAW8kSIz8ivpxVXBpGfcObm7cRCFzqh1rIHcDYR00VAPeCQ9k'); //Stripe client key
// secret key on top
const server = http.createServer(app);
const {Server} = require('socket.io');
//IT21013300

const io = new Server(server, {
  cors: '*',
  methods:'*'
})



app.use(cors());
app.use(express.json());

//Stripe payments
app.post('/', async(req, res)=> {
    const {amount} = req.body;
    console.log(amount);
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card']
      });
      console.log(amount);
      res.status(200).json(paymentIntent)
    } catch (e) {
      console.log(e.message);
      res.status(400).json(e.message);
     }
  })

server.listen(8083, () => {
  console.log("server running at port", 8083);
});

app.set("socketio", io);