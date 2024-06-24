const { RequestHandler } = require('express');
const { body, validationResult } = require('express-validator');

const validateUser = [
    body('F_NAME').notEmpty().withMessage('First name is required'),
    body('L_NAME').notEmpty().withMessage('Last name is required'),
    body('EMAIL').isEmail().withMessage('Email is invalid'),
    body('ADDRESS').notEmpty().withMessage('Address is required'),
    body('NUMBER').isNumeric().withMessage('Number must be numeric'),
    body('ZIP_CODE').isPostalCode('any').withMessage('ZIP code is invalid'),
    body('CC_NUMBER').isCreditCard().withMessage('Credit card number is invalid'),
    body('DOB').isDate({ format: 'yyyy-mm-dd' }).withMessage('Date of birth is invalid. Use MM/DD/YYYY format.'),
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUser,
    handleValidationErrors
};
