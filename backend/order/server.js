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

const orderRoutes = require('./routes/orderRoutes');
app.use(cors());
app.use(express.json());
app.use('/', orderRoutes);

server.listen(8079, () => {
  console.log("server running at port", 8079);
});

app.set("socketio", io);