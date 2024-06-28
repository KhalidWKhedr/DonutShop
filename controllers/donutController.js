// controllers/donutController.js
const DonutService = require('../services/donutService');

class DonutController {
    static getDonuts(req, res) {
        DonutService.getDonuts()
            .then(donuts => {
                res.status(200).json(donuts);
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    }
}

module.exports = DonutController;
