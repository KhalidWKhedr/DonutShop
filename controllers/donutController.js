// donutController.js

const DonutModule = require('../models/donutModel');

const fetchDonuts = (req, res) => {
    const donutModuleInstance = new DonutModule();

    donutModuleInstance.fetchDonuts((err, donuts) => {
        if (err) {
            console.error('Error fetching donuts:', err);
            res.status(500).json({ error: 'Error fetching donuts' });
        } else {
            // Validate donuts after fetching
            const isValid = donutModuleInstance.validateDonuts();
            if (isValid) {
                res.status(200).json(donuts); // Respond with fetched donuts if valid
            } else {
                res.status(400).json({ error: 'Validation error' }); // Respond with validation error
            }
        }
    });
};

module.exports = {
    fetchDonuts,
};
