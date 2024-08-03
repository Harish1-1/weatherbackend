const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const { logSession } = require('../controllers/sessionController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login, logSession);
router.post('/logout', logout);

module.exports = router;
