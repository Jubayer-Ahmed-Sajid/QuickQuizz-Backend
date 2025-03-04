const mongoose = require("mongoose");
const { quizzSchema } = require("../Schemas/quizzSchema");
const Quizz = new mongoose.model("Quizz", quizzSchema);

// get all quizz
const getQuizz = async (req, res) => {
  try {
    const quizz = await Quizz.find();
    res.status(200).json(quizz);
  } catch (err) {
    res.status(500).json(err);
  }
};

// create a new quizz
const createQuizz = async (req, res) => {
  try {
    const quizz = new Quizz(req.body);
    const newQuizz = await quizz.save();
    res.status(201).json(newQuizz);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get quizz by id
const getQuizzById = async (req, res) => {
  try {
    const quizz = await Quizz.findById(req.params.id);
    res.status(200).json(quizz);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update a quizz
const updateQuizz = async (req, res) => {
  try {
    const quizz = await Quizz.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Quizz updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete a quizz
const deleteQuizz = async (req, res) => {
  try {
    await Quizz.findByIdAndDelete(req.params.id);
    res.status(200).json("Quizz deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

// export the module
module.exports = {
  getQuizz,
  createQuizz,
  getQuizzById,
  updateQuizz,
  deleteQuizz,
};
