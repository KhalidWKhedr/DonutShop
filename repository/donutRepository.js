const util = require('util');
const connection = require('../config/database');

class DonutRepository {
    static async getDonuts() {
        const donutQuery = `
            SELECT
                dt.DONUT_TYPE_ID,
                dt.DONUT_NAME,
                dt.DONUT_FLAVOR,
                dt.DONUT_IMAGE_PATH,
                dt.DONUT_INGREDIENTS,
                dt.DONUT_PRICE,
                COUNT(d.DONUT_ID) AS DONUT_QUANTITY
            FROM
                DONUT_TYPE dt
            LEFT JOIN
                DONUTS d ON dt.DONUT_TYPE_ID = d.DONUT_TYPE_ID
            GROUP BY
                dt.DONUT_TYPE_ID;
            `
        try {
            const queryAsync = util.promisify(connection.query).bind(connection);
            const results = await queryAsync(donutQuery);
            console.log('Donuts fetched successfully');
            return results;
        } catch (err) {
            console.error('Error fetching donut info:', err);
            throw err;
        }
    }

    static async increaseQuantity() {
        // Implement logic to increase quantity asynchronously
    }

    static async decreaseQuantity() {
        // Implement logic to decrease quantity asynchronously
    }

    static async increasePrice() {
        // Implement logic to increase price asynchronously
    }

    static async decreasePrice() {
        // Implement logic to decrease price asynchronously
    }

    static async deleteDonut() {
        // Implement logic to delete a donut asynchronously
    }

    static async addDonut() {
        // Implement logic to add a donut asynchronously
    }
}

module.exports = DonutRepository;
