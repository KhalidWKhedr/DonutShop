const DonutService = require('../services/donutService');

class DonutController {
    getDonuts(req, res) {
        DonutService.getDonuts()
            .then(donuts => {
                res.locals.donuts = donuts;
                res.render('donuts', { donuts });
            })
            .catch(error => {
                res.status(500).send('Error fetching donuts: ' + error.message);
            });
    }
}

module.exports = new DonutController();
