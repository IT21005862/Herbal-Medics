const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.error('MongoDB connection error:', err));
db.once('connected', () => console.log('MongoDB connected'));
db.on('disconnected', () => console.log('MongoDB disconnected'));



//supplier mng related routes
const orderAdminRouter =require("./routes/OrderAdminR.js");
app.use("/OrderAdmin",orderAdminRouter);
/*
mongoose.connect(URL, () => {
    useCreateIndex: true;
    useNewUrlParser: true;
    useUnifiedTopology: true;
    useFindAndModify: true;
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection establishment is successful!!!");
});
*/

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});