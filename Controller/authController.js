const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { usersSchema } = require('../Schemas/usersSchema');
const User = mongoose.model('User', usersSchema);

const login = async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email or password is wrong' });

    // Create and assign a token
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('Authorization', `Bearer ${token}`).json({ token });
};

module.exports = { login };