const mongoose = require("mongoose");
const { usersSchema } = require("../Schemas/usersSchema");
const User = new mongoose.model("User", usersSchema);

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get user by id
const getUserById =async(req,rs)=>{
    try{
        const user = await User.findById(req.params.id);
        rs.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
      }

}

// export the module
module.exports = {
  getUsers,
  createUser,
  getUserById
};
