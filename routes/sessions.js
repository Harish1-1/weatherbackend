

const express = require('express');
const { getSessions } = require('../controllers/sessionController');
const router = express.Router();

router.get('/', getSessions); 

module.exports = router;
