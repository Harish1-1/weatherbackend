const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent, getWeather } = require('../controllers/eventController');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.post('/', authenticate, createEvent);
router.get('/', authenticate, getEvents);
router.put('/:id', authenticate, updateEvent);
router.delete('/:id', authenticate, deleteEvent);
router.get('/weather/:location', getWeather);

module.exports = router;
