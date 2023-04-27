const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

 image: {
    type: String,
    required: true,
  },

  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,

    default: new Date(),
    required: true,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;