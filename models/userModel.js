const Joi = require('joi');

// Define Joi schema for user data validation
const userSchema = Joi.object({
    EMAIL: Joi.string().email().required(),
    PASSWORD: Joi.string().required()
});

class UserModel {
    constructor(userData) {
        this.EMAIL = userData.EMAIL;
        this.PASSWORD = userData.PASSWORD;
    }

    static validate(userData) {
        return userSchema.validate(userData);
    }
}

module.exports = UserModel;
