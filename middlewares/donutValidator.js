// donutValidator.js

class DonutValidator {
    static ValidateID(donut) {
        if (!donut.DONUT_ID) {
            throw new Error('Donut ID is required.');
        }
        // Additional validation logic for ID if needed
    }
    static validateFlavor(donut) {
        if (!donut.DONUT_FLAVOR) {
            throw new Error('Donut flavor is required.');
        }
        // Additional validation logic for flavor if needed
    }

    static validatePrice(donut) {
        if (!donut.DONUT_PRICE || isNaN(donut.DONUT_PRICE)) {
            throw new Error('Invalid donut price.');
        }
        // Additional validation logic for price if needed
    }

    static validateQuantity(donut) {
        if (!donut.DONUT_QUANTITY || isNaN(donut.DONUT_QUANTITY)) {
            throw new Error('Invalid donut quantity.');
        }
        // Additional validation logic for quantity if needed
    }

    static validateDescription(donut) {
        if (!donut.DONUT_DESCRIPTION) {
            throw new Error('Donut description is required.');
        }
        // Additional validation logic for description if needed
    }

    static validateImagePath(donut) {
        if (!donut.DONUT_IMAGE_PATH) {
            throw new Error('Donut image path is required.');
        }
        // Additional validation logic for image path if needed
    }
}

module.exports = DonutValidator;
