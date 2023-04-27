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


const FeedbackRoutes = require('./routes/FeedbackRoutes');
app.use(cors());
app.use(express.json());
app.use('/', FeedbackRoutes);

server.listen(8085, () => {
  console.log("server running at port", 8085);
});

app.set("socketio", io);