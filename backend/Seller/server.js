const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();

require('./connection');
const server = http.createServer(app);
const {Server} = require('socket.io');


const io = new Server(server, {
  cors: '*',
  methods:'*'
})

const Seller = require('./models/sellermodel');
const SellerRoutes = require('./routes/Sellerroutes');
app.use(cors());
app.use(express.json());
app.use('/', SellerRoutes);

server.listen(8084, () => {
  console.log("server running at port", 8084);
});

app.set("socketio", io);