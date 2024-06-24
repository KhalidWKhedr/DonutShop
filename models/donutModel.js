// donutModule.js

const DonutRepository = require('../repository/donutRepository');
const DonutValidator = require('../middlewares/donutValidator'); // Import DonutValidator class

class DonutModule {
    constructor() {
        this.donuts = []; // Initialize donuts property
    }

    fetchDonuts(callback) {
        DonutRepository.fetchDonuts((err, donuts) => {
            if (err) {
                console.error('Error fetching donuts:', err);
                callback(err); // Pass error to callback
            } else {
                this.donuts = donuts; // Assign fetched donuts to instance property
                callback(null, donuts); // Pass fetched donuts to callback
            }
        });
    }

    validateDonuts() {
        try {
            this.donuts.forEach((donut) => {
                DonutValidator.validateFlavor(donut);
                DonutValidator.validatePrice(donut);
                DonutValidator.validateQuantity(donut);
                DonutValidator.validateDescription(donut);
                DonutValidator.validateImagePath(donut);
                console.log(`Donut ${donut.donuts} is valid.`);
            });
            return true; // All donuts passed validation
        } catch (error) {
            console.error('Validation error:', error.message);
            return false; // Validation failed
        }
    }
}

module.exports = DonutModule;
