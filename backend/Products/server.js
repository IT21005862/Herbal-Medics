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


const productRoutes = require('./routes/productroutes');
app.use(cors());
app.use(express.json());
app.use('/', productRoutes);

server.listen(8082, () => {
  console.log("server running at port", 8082);
});

app.set("socketio", io);