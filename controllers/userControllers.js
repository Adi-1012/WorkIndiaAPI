const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
    console.log("User already exists");
      return res.status(400).json({ message: 'User already exists' });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ username, password: hashedPassword, email });

    res.status(201).json({ message: 'Account successfully created', user_id: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
