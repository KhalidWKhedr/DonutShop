// controllers/donutController.js
const DonutModule = require('../models/donutModel');

const fetchDonuts = (req, res) => {
    const donutModuleInstance = new DonutModule();

    donutModuleInstance.fetchDonuts((err, donuts) => {
        if (err) {
            console.error('Error fetching donuts:', err);
            return res.status(500).json({ error: 'Error fetching donuts' });
        }

        // Validate donuts after fetching
        const isValid = donutModuleInstance.validateDonuts();
        if (!isValid) {
            return res.status(400).json({ error: 'Validation error' });
        }

        // Log each donut's details
        donuts.forEach(donut => {
            console.log(`CONTROLLER: Donut Name: ${donut.DONUT_NAME}`);
            console.log(`CONTROLLER: Donut Flavor: ${donut.DONUT_FLAVOR}`);
            console.log(`CONTROLLER: Donut Price: ${donut.DONUT_PRICE}`);
            console.log(`CONTROLLER: Donut Quantity: ${donut.DONUT_QUANTITY}`);
            console.log(`CONTROLLER: Donut Description: ${donut.DONUT_DESCRIPTION}`);
            console.log(`CONTROLLER: Donut Image Path: ${donut.DONUT_IMAGE_PATH}`);
            console.log('CONTROLLER: ---------------------------');
        });

        // Respond with fetched donuts if valid
        res.status(200).json(donuts);
    });
};

module.exports = {
    fetchDonuts,
};
