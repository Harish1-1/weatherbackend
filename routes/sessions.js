/*const express = require('express');
const { getSessions } = require('../controllers/sessionController');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, getSessions);

module.exports = router;
*/

const express = require('express');
const { getSessions } = require('../controllers/sessionController'); // Ensure this import is correct
const router = express.Router();

router.get('/', getSessions); // Ensure getSessions is a valid function

module.exports = router;
