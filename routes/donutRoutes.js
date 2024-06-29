const express = require('express');
const router = express.Router();
const DonutService = require('../services/donutService');

// Route to render donuts page
router.get('/main-page/donuts', async (req, res) => {
    try {
        const donuts = await DonutService.getDonuts(); // Assuming DonutService.getDonuts() fetches data
        res.render('donuts', { donuts }); // Render the EJS template with donuts data
    } catch (error) {
        console.error('Error fetching donuts:', error);
        res.status(500).send('Error fetching donuts');
    }
});

module.exports = router;
