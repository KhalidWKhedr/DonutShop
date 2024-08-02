const { body, validationResult } = require('express-validator');

const validateUserAccount = [
    body('F_NAME')
        .notEmpty().withMessage('First Name is required')
        .isString(),
    body('L_NAME')
        .notEmpty().withMessage('Last Name is required')
        .isString(),
    body('ADDRESS')
        .notEmpty().withMessage('Address is required')
        .isString(),
    body('PHONE_NUMBER')
        .notEmpty().withMessage('Phone Number is required')
        .isNumeric().withMessage('Phone Number must be numeric'),
    body('ZIP_CODE')
        .notEmpty().withMessage('ZIP Code is required')
        .isNumeric().withMessage('ZIP Code must be numeric'),
    body('CC_NUMBER')
        .notEmpty().withMessage('Credit Card Number is required')
        .isNumeric().withMessage('Credit Card Number must be numeric')
];
const handleValidationErrors = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUserAccount,
    handleValidationErrors
};
