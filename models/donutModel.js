const Joi = require('joi');
const DonutValidator = require('../middleware/donutValidator');

// Define Joi schema for donut data validation
const donutSchema = Joi.object({
    DONUT_ID: Joi.number().required(),
    DONUT_NAME: Joi.string().required(),
    DONUT_FLAVOR: Joi.string().required(),
    DONUT_PRICE: Joi.number().required(),
    DONUT_QUANTITY: Joi.number().integer().min(0).required(),
    DONUT_DESCRIPTION: Joi.string().required(),
    DONUT_IMAGE_PATH: Joi.string().required()
});

class DonutModel {
    constructor(donutData) {
        this.DONUT_ID = donutData.DONUT_ID
        this.DONUT_NAME = donutData.DONUT_NAME;
        this.DONUT_FLAVOR = donutData.DONUT_FLAVOR;
        this.DONUT_PRICE = donutData.DONUT_PRICE;
        this.DONUT_QUANTITY = donutData.DONUT_QUANTITY;
        this.DONUT_DESCRIPTION = donutData.DONUT_DESCRIPTION;
        this.DONUT_IMAGE_PATH = donutData.DONUT_IMAGE_PATH;
    }

    static async validate(donutData) {
        // Synchronous validation with Joi
        const { error } = donutSchema.validate(donutData);
        if (error) {
            throw new Error(`Validation error: ${error.details[0].message}`);
        }

        // Asynchronous custom validations
        await Promise.all([
            DonutValidator.validateID(donutData),
            DonutValidator.validateFlavor(donutData),
            DonutValidator.validatePrice(donutData),
            DonutValidator.validateQuantity(donutData),
            DonutValidator.validateDescription(donutData),
            DonutValidator.validateImagePath(donutData)
        ]);

        return true; // If all validations pass
    }
}

module.exports = DonutModel;
