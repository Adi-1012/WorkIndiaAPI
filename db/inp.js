const bcrypt = require('bcryptjs');
const User = require('../models/user');

async function createUser() {
  try {
    const hashedPassword = await bcrypt.hash('password123', 10); // Hashing the password
    const newUser = await User.create({
      username: 'john_doe',
      password: hashedPassword,
      email: 'john.doe@example.com'
    });

    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
