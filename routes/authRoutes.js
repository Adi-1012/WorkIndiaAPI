const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login route (POST method)
router.post('/login', authController.login);

module.exports = router;
