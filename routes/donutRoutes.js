// routes/donutRoutes.js

const express = require('express');
const router = express.Router();
const donutController = require('../controllers/donutController');

// Route to fetch and render donut data
router.get('/main-page/donuts', donutController.fetchDonuts);
module.exports = router;
