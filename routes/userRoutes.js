const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');

// Serve signup form
router.get('/main-page/signup-form', async (req, res, next) => {
    try {
        const filePath = path.join(__dirname, '..', 'views', 'signup-form.html');
        console.log(`Resolved file path for signup-form: ${filePath}`);
        res.sendFile(filePath, (err) => {
            if (err) {
                next(err); // Pass error to the next middleware
            }
        });
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});

// Endpoint to handle user creation form submission with validation
router.post('/main-page/submit-form', async (req, res, next) => {
    try {
        await userController.newUser(req, res);
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});

// Serve login form
router.get('/main-page/login-form', async (req, res, next) => {
    try {
        const filePath = path.join(__dirname, '..', 'views', 'login-form.html');
        console.log(`Resolved file path for login-form: ${filePath}`);
        res.sendFile(filePath, (err) => {
            if (err) {
                next(err); // Pass error to the next middleware
            }
        });
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});

// Handle login form submission with validation
router.post('/main-page/login-form', async (req, res, next) => {
    try {
        const user = await userController.authenticateUser(req, res)
        console.log("this is user" , user)
        req.session.user = user
        await req.session.save();
        console.log("Your are logged in");
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});

router.get('/main-page/account', async (req, res, next) => { // Add next as a parameter
    try {
        const { ACCOUNT_ID, EMAIL, PASSWORD } = req.session.user || {};
        const user = { ACCOUNT_ID, EMAIL, PASSWORD };
        console.log('Session User:', user); // Verify the filtered user object
        res.render('account-setup-form', { user });
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});

router.post('/main-page/account', async (req, res, next) => {
    const userSessionData = req.session.user;
    try {
            const account_info = await userController.userAccount(userSessionData, req, res)
            console.log(account_info)
            console.log("this is account information" , account_info)
            console.log("Your appended account information");
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});
module.exports = router;

