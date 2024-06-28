// repository/donutRepository.js
const connection = require('../config/database');

class DonutRepository {
    static getDonuts(callback) {
        const donutQuery = 'SELECT * FROM DONUTS';

        connection.query(donutQuery, (err, results) => {
            if (err) {
                console.error('Error fetching donut info:', err);
                return callback(err, null);
            }
            console.log('Donuts fetched successfully');
            callback(null, results);
        });
    }
    static increaseQuantity(callback) {

    }
    static decreaseQuantity(callback){

    }
    static increasePrice(callback){

    }
    static deleteDonut(callback){

    }
    static addDonut(callback){

    }
}

module.exports = DonutRepository;
