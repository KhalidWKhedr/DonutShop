const DonutRepository = require('../repository/donutRepository');
const donutModel = require('../models/donutModel');

class DonutService {
    static fetchDonuts() {
        return new Promise((resolve, reject) => {
            DonutRepository.fetchDonuts((err, donuts) => {
                if (err) {
                    return reject(err);
                }

                try {
                    // Validate each donut
                    donuts.forEach(donut => {
                        donutModel.validate(donut);
                    });
                    resolve(donuts);
                } catch (validationError) {
                    reject(validationError);
                }
            });
        });
    }
}
module.exports = DonutService;
