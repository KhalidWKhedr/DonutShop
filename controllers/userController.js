const userService = require('../services/userService');

class UserController {
    static async newUser(req, res) {
        const { SIGNUPIDENTIFIER, SIGNUPPASSWORD } = req.body;
        console.log(req.body); // For debugging purposes

        try {
            const results = await userService.newUser(SIGNUPIDENTIFIER, SIGNUPPASSWORD);
            res.status(201).json({ message: 'User created successfully', data: results });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    static async authenticateUser(req, res) {
        const { IDENTIFIER, PASSWORD } = req.body;
        if (!IDENTIFIER || !PASSWORD) {
            return res.status(400).json({ error: 'IDENTIFIER and PASSWORD are required' });
        }

        try {
            const user = await userService.authenticateUser(IDENTIFIER, PASSWORD);
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            console.log({ message: 'Login successful', user });
            res.redirect('/main-page');
            return user;
        } catch (err) {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    }
}

module.exports = UserController;
