const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();

require('./connection');
const server = http.createServer(app);
const {Server} = require('socket.io');

app.use(cors());
app.use(bodyParser.json());

const io = new Server(server, {
  cors: '*',
  methods:'*'
})

const cartRoutes = require('./routes/cartRoutes');
app.use(cors());
app.use(express.json());
app.use('/', cartRoutes);

server.listen(8078, () => {
  console.log("server running at port", 8078);
});

app.set("socketio", io);