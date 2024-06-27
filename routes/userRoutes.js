const express = require('express');
const router = express.Router();
const path = require('path');
const UserService = require('../services/userService');
const { validateUser, handleValidationErrors } = require('../middlewares/signupValidator');

// Serve signup form
router.get('/main-page/signup-form', (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'signup-form.html');
    console.log(`Resolved file path for signup-form: ${filePath}`);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        }
    });
});

// Endpoint to handle form submission with validation
router.post('/main-page/submit-form', validateUser, handleValidationErrors, (req, res) => {
    console.log('POST /submit-form endpoint accessed');
    UserService.createUser(req.body, (err, results) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: 'User created successfully', user: results });
    });
});

router.post('/main-page/login-form', validateUser, handleValidationErrors, (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'login-form.html');
    console.log(`Resolved file path for login-form: ${filePath}`);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        }
    });
});

module.exports = router;
