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

const User = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');
app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

server.listen(8081, () => {
  console.log("server running at port", 8081);
});

app.set("socketio", io);