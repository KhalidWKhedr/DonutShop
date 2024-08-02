const userService = require('../services/userService');

class UserController {
    static async newUser(req, res) {
        const {SIGNUPEMAIL, SIGNUPPASSWORD} = req.body;
        console.log(req.body); // For debugging purposes

        try {
            const results = await userService.newUser(SIGNUPEMAIL, SIGNUPPASSWORD);
            res.status(201).json({message: 'User created successfully', data: results});
        } catch (err) {
            res.status(400).json({error: err.message});
        }
    }

    static async authenticateUser(req, res) {
        const {EMAIL, PASSWORD} = req.body;
        console.log(req.body);
        if (!EMAIL || !PASSWORD) {
            return res.status(400).json({error: 'EMAIL and PASSWORD are required'});
        }

        try {
            const user = await userService.authenticateUser(EMAIL, PASSWORD);
            console.log(req.body)
            if (!user) {
                return res.status(401).json({error: 'Invalid credentials'});
            }
            console.log({message: 'Login successful', user});
            res.redirect('/main-page');
            return user;
        } catch (err) {
            res.status(401).json({error: 'Invalid credentials'});
        }
    }

    static async userAccount(userSessionData, req, res) {

        try {
            const {ACCOUNT_ID} = req.session.user; // Ensure session data is accessible
            if (!ACCOUNT_ID) {
                return res.status(400).send('Account ID is missing.');
            }

            // Extract user data from request body
            const {F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB} = req.body;
            console.log('User data:', req.body); // Log user data for debugging

            try {
                // Call the service to handle account creation
                const userAccount = await userService.userAccount(ACCOUNT_ID, F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB);
                res.status(201).json({
                    message: 'User account info successfully created',
                    data: userAccount
                });
            } catch (err) {
                console.error('Error creating user account:', err); // Log error for debugging
                res.status(500).json({error: 'Failed to create user account'});
            }
        } catch (err) {
            console.error('Error in createUserAccount controller:', err); // Log error for debugging
            res.status(500).json({error: 'Internal server error'});
        }
    };
}
module.exports = UserController;
