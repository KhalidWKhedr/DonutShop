const Joi = require('joi');

// Define Joi schema for user data validation
const userSchema = Joi.object({
    F_NAME: Joi.string().required(),
    L_NAME: Joi.string().required(),
    EMAIL: Joi.string().email().required(),
    ADDRESS: Joi.string().required(),
    NUMBER: Joi.string().required(),
    ZIP_CODE: Joi.string().required(),
    CC_NUMBER: Joi.string().creditCard().required(),
    DOB: Joi.date().iso().required()
});

class UserModel {
    constructor(userData) {
        this.F_NAME = userData.F_NAME;
        this.L_NAME = userData.L_NAME;
        this.EMAIL = userData.EMAIL;
        this.ADDRESS = userData.ADDRESS;
        this.NUMBER = userData.NUMBER;
        this.ZIP_CODE = userData.ZIP_CODE;
        this.CC_NUMBER = userData.CC_NUMBER;
        this.DOB = userData.DOB;
    }

    static validate(userData) {
        return userSchema.validate(userData);
    }
}

module.exports = UserModel;
