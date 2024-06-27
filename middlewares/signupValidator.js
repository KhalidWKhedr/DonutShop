const { body, validationResult } = require('express-validator');

const validateUser = [
    body('IDENTIFIER')
        .notEmpty().withMessage('Identifier is required')
        .custom(value => {
            // Check if value is an email or a number
            if (!value.match(/^[0-9]+$/) && !value.match(/^\S+@\S+\.\S+$/)) {
                throw new Error('Identifier must be an email or a number');
            }
            return true;
        }),
    body('PASSWORD')
        .isStrongPassword()
        .withMessage('Password is not strong enough')
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
