// controllers/userController.js
const UserModel = require('../models/userModel');
const userService = require('../services/userService');

class UserController {
    static createUser(req, res) {
        // Validate user data
        const {error} = UserModel.validate(req.body);
        if (error) {
            return res.status(400).json({error: error.details[0].message});
        }

        userService.createUser(req.body, (err, results) => {
            if (err) {
                return res.status(400).json({error: err.message});
            }
            res.status(201).json({message: 'User created successfully', data: results});
        });
    };
}

module.exports = UserController;
