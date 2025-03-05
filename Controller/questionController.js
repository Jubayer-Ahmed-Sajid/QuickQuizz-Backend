const mongoose = require("mongoose");
const { questionsSchema } = require("../Schemas/questionsSchema");
const Questions = mongoose.model("Questions", questionsSchema);

// Retrieve all questions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Questions.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new question
const createQuestion = async (req, res) => {
  try {
    const newQuestion = new Questions(req.body);
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Retrieve a specific question by ID
const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Questions.findById(id);
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a question by ID
const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuestion = await Questions.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedQuestion) {
      res.status(200).json(updatedQuestion);
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a question by ID
const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await Questions.findByIdAndDelete(id);
    if (deletedQuestion) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};
