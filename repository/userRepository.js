// repository/userRepository.js
const connection = require('../config/database');
const {IDENTIFIER, PASSWORD} = require("../models/userModel");

class UserRepository {
    static createUser(userData, callback) {
        const newUser = userData;

        const query = 'INSERT INTO ACCOUNTS (IDENTIFIER, PASSWORD) VALUES (?, ?)';
        const values = [newUser.IDENTIFIER, newUser.PASSWORD];

        connection.query(query, values, (err, results) => {
            if (err) {
                console.error('Error creating user:', err);
                return callback(err, null);
            }
            console.log('User created successfully');
            callback(null, results);
        });
    }
    static findUser(callback) {

        const getUserQuery = 'SELECT * FROM ACCOUNTS WHERE ACCOUNTS.EMAIL = ? OR ACCOUNTS.NUMBER = ?';
        const values = [IDENTIFIER, PASSWORD];

        connection.query(getUserQuery, values, (err, results) => {
            if (err) {
                console.error('Error getting user:', err);
                return callback(err, null);
            }
            console.log('User fetched successfully');
            callback(null, results);
        });
    }
}

module.exports = UserRepository;
