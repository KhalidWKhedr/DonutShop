const Joi = require('joi');

// Define Joi schema for user data validation
const userSchema = Joi.object({
    IDENTIFIER: Joi.alternatives().try(
        Joi.string().email(),
        Joi.string().pattern(/^[0-9]+$/)
    ).required(),
    PASSWORD: Joi.string().required()
});

class UserModel {
    constructor(userData) {
        this.IDENTIFIER = userData.IDENTIFIER;
        this.PASSWORD = userData.PASSWORD;
    }

    static validate(userData) {
        return userSchema.validate(userData);
    }
}

module.exports = UserModel;
