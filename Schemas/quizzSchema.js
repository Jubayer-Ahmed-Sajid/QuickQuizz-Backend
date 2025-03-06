const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const { array } = require("joi");

const quizzSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: {
    type: Array,
    default: [],
  },
  createdBy: {
    type: String,

    required: true,
  },
  createdAt: {
    type: Date,

    default: Date.now(),
  },
});
module.exports = { quizzSchema };
