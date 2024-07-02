const bcrypt = require('bcryptjs');
const User = require('../models/user');

async function createAdminUser() {
  try {
    const hashedPassword = await bcrypt.hash('adminpassword123', 10);
    const newUser = await User.create({
      username: 'admin_user',
      password: hashedPassword,
      email: 'admin@example.com',
      role: 'admin'
    });

    console.log('Admin user created:', newUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();
