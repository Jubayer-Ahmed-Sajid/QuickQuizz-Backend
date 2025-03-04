const mongoose = require("mongoose");
const { userSchema } = require("../Schemas/usersSchema");
const User = new mongoose.model("User", userSchema);
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  getUsers,
  createUser,
};
