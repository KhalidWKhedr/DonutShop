// DonutService.js
const DonutRepository = require('../repository/donutRepository');
const donutModel = require('../models/donutModel');

class DonutService {
    static async getDonuts() {
        try {
            const donuts = await DonutRepository.getDonuts(); // Assuming getDonuts returns a promise
            donuts.forEach(donut => {
                donutModel.validate(donut);
            });
            return donuts;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DonutService;
