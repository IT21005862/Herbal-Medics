require('dotenv').config();

const mongoose = require('mongoose');
//Mongo DB username and password (USERNAME) + (PASSWORD) is in the .env file
const connectionStr = `Your MongoDB connection URI here`;
mongoose.connect(connectionStr, {useNewUrlparser: true,useUnifiedTopology: true,})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))  

mongoose.connection.on('error', err => {
  console.log(err)
})