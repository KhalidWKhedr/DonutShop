const userService = require('../services/userService');

class UserController {
    static newUser(req, res) {
        const { SIGNUPIDENTIFIER, SIGNUPPASSWORD } = req.body;
        console.log(req.body); // For debugging purposes
        userService.newUser(SIGNUPIDENTIFIER, SIGNUPPASSWORD, (err, results) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.status(201).json({ message: 'User created successfully', data: results });
        });
    }

    static authenticateUser(req, res) {
        const { IDENTIFIER, PASSWORD } = req.body;
        if (!IDENTIFIER || !PASSWORD) {
            return res.status(400).json({ error: 'IDENTIFIER and PASSWORD are required' });
        }

        userService.authenticateUser(IDENTIFIER, PASSWORD, (err, user) => {
            if (err || !user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            console.log({ message: 'Login successful', user });
            res.redirect('/main-page');
        });
    }
}

module.exports = UserController;
