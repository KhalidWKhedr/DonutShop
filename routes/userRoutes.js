// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validateUser, handleValidationErrors } = require('../middlewares/signupValidator');
const path = require("path");

router.get('/main-page/modal-form', (req, res) => {
    const filePath = path.join(__dirname, '..', 'client', 'assets', 'html', 'signup-form.html');
    console.log(`Resolved file path: ${filePath}`);
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
    console.log('POST /submit-form endpoint accessed');
    UserController.createUser(req, res); // Delegate the request to your controller
});
module.exports = router;

