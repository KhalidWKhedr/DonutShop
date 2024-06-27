// services/userService.js
const userRepository = require('../repository/userRepository');
const UserModel = require('../models/userModel');

class UserService {
    static createUser(userData, callback) {
        const { error } = UserModel.validate(userData);
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

    static findUser(userData, callback) {
        const { error } = UserModel.validate(userData);
        if (error) {
            return callback(new Error(error.details[0].message), null);
        }

        userRepository.findUser(userData, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }
}

module.exports = UserService;
