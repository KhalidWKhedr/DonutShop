const { body, validationResult } = require('express-validator');

const validateUser = [
    body('EMAIL').isEmail().withMessage('Email is invalid'),
    body('PASSWORD').isStrongPassword().withMessage('Password is not strong enough'),
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
