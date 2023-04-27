const router = require("express").Router();
const mongoose = require("mongoose");
const Feedback = require("../models/FeedbackModel");


//get all feedbacks
router.get("/getallfeedbacks", async (req, res) => {
  let feedbacks;
  try {
    feedbacks = await Feedback.find().populate("user");
  } catch (err) {
    return console.log(err);
  }
  if (!feedbacks) {
    return res.status(404).json({ message: "No Feedbacks Found" });
  }
  return res.status(200).json({ feedbacks });
});

//addFeedbacks
router.post("/addFeedback", async (req, res) => {
  try {
    const {title,description,image,user,date} = req.body;
    const feedback = await Feedback.create({title,description,image,user,date});
    console.log(feedback);
    const feedbacks = await Feedback.find();
    res.status(201).json(feedbacks);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//Update feedback
router.put("/updateFeedback/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image, user } = req.body;
  let feedback;
  try {
    feedback = await Feedback.findByIdAndUpdate(id, {
      title,
      description,
      image,
      user,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!feedback) {
    return res.status(500).json({ message: "Unable To Update Feedback" + id });
  }
  return res.status(200).json({ feedback });
});

//Delete feedback
router.delete("/deleteFeedback/:id", async (req, res) => {
  const { id } = req.params;
  let feedback;
  try {
    feedback = await Feedback.findByIdAndRemove(id).populate("user");
    await feedback.user.feedbacks.pull(feedback);
    await feedback.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!feedback) {
    return res.status(500).json({ message: "Unable To Delete" });
  }

  return res.status(200).json({ message: "Successfull Delete" });
});

//Get a user feedback
router.get("/fuser/:id", async (req, res) => {
  const userId = req.params.id;
  let userFeedbacks;
  try {
    userFeedbacks = await Feedback.find({ user: userId });
  } catch (err) {
    return console.log(err);
  }
  if (!userFeedbacks) {
    return res.status(404).json({ message: "No Feedback Found" });
  }
  return res.status(200).json({ user: userFeedbacks });
});

module.exports = router;