const Joi = require('joi');

// Define Joi schema for user login validation
const userLoginSchema = Joi.object({
    IDENTIFIER: Joi.alternatives().try(
        Joi.string().email(),
        Joi.string().pattern(/^[0-9]+$/)
    ).required(),
    PASSWORD: Joi.string().required(),
});

// Define Joi schema for user account information validation
const userAccountSchema = Joi.object({
    F_NAME: Joi.string().required(),
    L_NAME: Joi.string().required(),
    ADDRESS: Joi.string().required(),
    PHONE_NUMBER: Joi.number(),
    ZIP_CODE: Joi.number().required(),
    CC_NUMBER: Joi.number().required(),
    DOB: Joi.date().required(),
});

class UserModel {
    constructor(userData) {
        this.IDENTIFIER = userData.IDENTIFIER;
        this.PASSWORD = userData.PASSWORD;
        this.F_NAME = userData.F_NAME;
        this.L_NAME = userData.L_NAME;
        this.ADDRESS = userData.ADDRESS;
        this.PHONE_NUMBER = userData.PHONE_NUMBER;
        this.ZIP_CODE = userData.ZIP_CODE;
        this.CC_NUMBER = userData.CC_NUMBER;
        this.DOB = userData.DOB;
    }

    static validateLogin(userData) {
        return userLoginSchema.validate(userData);
    }

    static validateAccount(userData) {
        return userAccountSchema.validate(userData);
    }
}

module.exports = UserModel;
