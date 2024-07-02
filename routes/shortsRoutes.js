const express = require('express');
const router = express.Router();
const shortsController = require('../controllers/shortsController');
const authMiddleware = require('../middleware/authMiddleware'); 


router.post('/create', authMiddleware, shortsController.createShort);

module.exports = router;