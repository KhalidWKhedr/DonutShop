// services/userService.js
const userRepository = require('../repository/userRepository');
const userModel = require('../models/userModel');

class UserService {
    static createUser(userData, callback) {
        const {error} = userModel.validate(userData);
        if (error) {
            return callback(new Error(error.details[0].message), null);
        }

        userRepository.createUser(userData, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }

    static authenticateUser(identifier, password, callback) {
        // Validate identifier and password (if necessary)
        // Perform any additional logic or checks here

        // Example: Using UserModel for validation (optional)
        const { error } = userModel.validate({ IDENTIFIER: identifier, PASSWORD: password });
        if (error) {
            return callback(new Error(error.details[0].message), null);
        }

        // Call userRepository or database layer to authenticate user;
        userRepository.getUser(identifier, (err, results) => {
            if (err) {
                return callback(err, null);
            }

            if (results.length === 0) {
                console.log('User not found');
                return callback(new Error('User not found'), null);
            }

            const user = results[0]; // Assuming results is an array of user objects
            const userPassword = user.PASSWORD; // Extract PASSWORD from user object

            if (userPassword !== password) {
                console.log('Authentication failed: Invalid credentials');
                return callback(new Error('Invalid credentials'), null);
            }

            console.log('Authentication successful');
            callback(null, user);
        });
    }
}


module.exports = UserService;
