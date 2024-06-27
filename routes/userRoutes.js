const express = require('express');
const router = express.Router();
const path = require('path');
const UserController = require('../controllers/userController');
const { validateUser, handleValidationErrors } = require('../middlewares/signupValidator');

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

// Endpoint to handle form submission with validation
router.post('/main-page/submit-form', validateUser, handleValidationErrors, (req, res) => {
    console.log('POST /submit-form endpoint accessed');
    UserController.createUser(req, res); // Delegate the request to your controller
});

router.post('/main-page/login', validateUser, handleValidationErrors, (req, res) => {
    console.log('POST /login endpoint accessed');
    UserController.createUser(req, res); // Delegate the request to your controller
});

module.exports = router;
