const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');

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

// Endpoint to handle user creation form submission with validation
router.post('/main-page/submit-form', userController.createUser);

// Serve login form
router.get('/main-page/login-form', (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'login-form.html');
    console.log(`Resolved file path for login-form: ${filePath}`);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        }
    });
});

// Handle login form submission with validation
router.post('/main-page/login-form', userController.authenticateUser);

module.exports = router;
