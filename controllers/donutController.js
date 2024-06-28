// controllers/donutController.js
const DonutService = require('../services/donutService');

class DonutController {
    static fetchDonuts(req, res) {
        DonutService.fetchDonuts()
            .then(donuts => {
                res.status(200).json(donuts);
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    }
}

module.exports = DonutController;
