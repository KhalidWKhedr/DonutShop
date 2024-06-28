// repository/userRepository.js
const connection = require('../config/database');

class UserRepository {

    static newUser(signupIdentifier, signupPassword, callback) {

        const query = 'INSERT INTO ACCOUNTS (IDENTIFIER, PASSWORD) VALUES (?, ?)';
        const values = [signupIdentifier,signupPassword];

        connection.query(query, values, (err, results) => {
            if (err) {
                console.error('Error creating user:', err);
                return callback(err, null);
            }
            console.log('User created successfully');
            callback(null, results);
        });
    }

    static getUserLogin(identifier, callback) {
        console.log('Identifier to query:', identifier); // Check what is being passed to the query
        const getUserQuery = 'SELECT * FROM ACCOUNTS WHERE ACCOUNTS.IDENTIFIER = ?';
        connection.query(getUserQuery, identifier, (err, results) => {
            if (err) {
                console.error('Error getting user:', err);
                return callback(err, null); // Handle database error
            }

            if (results.length === 0) {
                console.log('User not found');
                return callback(null, null); // User not found
            }

            console.log('User fetched successfully');
            console.log('Results:', results);
            callback(null, results);
        });
    }
}
module.exports = UserRepository;
