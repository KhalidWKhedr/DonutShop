class DonutValidator {
    static async validateID(donut) {
        if (!donut.DONUT_TYPE_ID) {
            throw new Error('Donut ID is required.');
        }
        // Additional async validation logic for ID if needed
    }

    static async validateFlavor(donut) {
        if (!donut.DONUT_FLAVOR) {
            throw new Error('Donut flavor is required.');
        }
        // Additional async validation logic for flavor if needed
    }

    static async validatePrice(donut) {
        if (!donut.DONUT_PRICE || isNaN(donut.DONUT_PRICE)) {
            throw new Error('Invalid donut price.');
        }
        // Additional async validation logic for price if needed
    }

    static async validateIngredients(donut) {
        if (!donut.DONUT_INGREDIENTS) {
            throw new Error('Donut description is required.');
        }
        // Additional async validation logic for description if needed
    }

    static async validateImagePath(donut) {
        if (!donut.DONUT_IMAGE_PATH) {
            throw new Error('Donut image path is required.');
        }
        // Additional async validation logic for image path if needed
    }
    static async validateQuantity(donut) {
        if (!donut.DONUT_QUANTITY) {
            throw new Error('Donut image quantity is required.');
        }
        // Additional async validation logic for image path if needed
    }
}

module.exports = DonutValidator;
