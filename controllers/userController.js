// controllers/userController.js
const userService = require('../repository/userRepository');

class UserController {
    static createUser(req, res) {
        userService.createUser(req.body, (err, results) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.status(201).json({ message: 'User created successfully', data: results });
        });
    }
}

module.exports = UserController;
