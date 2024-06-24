// routes/donutRoutes.js

const express = require('express');
const router = express.Router();
const DonutController = require('../controllers/donutController');

// Route to fetch and render donut data
router.get('/donuts', DonutController.fetchDonuts);

module.exports = router;
