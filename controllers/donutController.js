const DonutService = require('../services/donutService');

class DonutController {
    async getDonuts(req, res) {
        try {
            const donuts = await DonutService.getDonuts();
            console.log("here i am")
            res.locals.donuts = donuts;
            res.render('donuts', { donuts });
        } catch (error) {
            res.status(500).send('Error fetching donuts: ' + error.message);
        }
    }
}

module.exports = new DonutController();
