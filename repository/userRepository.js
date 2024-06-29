const util = require('util');
const connection = require('../config/database');

class UserRepository {

    static async newUser(signupIdentifier, signupPassword) {
        const query = 'INSERT INTO ACCOUNTS (IDENTIFIER, PASSWORD) VALUES (?, ?)';
        const values = [signupIdentifier, signupPassword];

        try {
            const queryAsync = util.promisify(connection.query).bind(connection);
            const results = await queryAsync(query, values);
            console.log('User created successfully');
            return results;
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                // Duplicate entry error
                throw new Error('Email or Number already exists, please login or recover account');
            } else {
                // Other database error
                console.error('Error creating user:', err);
                throw err;
            }
        }
    }

    static async getUserLogin(identifier) {
        console.log('Identifier to query:', identifier); // Check what is being passed to the query
        const getUserQuery = 'SELECT * FROM ACCOUNTS WHERE ACCOUNTS.IDENTIFIER = ?';

        try {
            const queryAsync = util.promisify(connection.query).bind(connection);
            const results = await queryAsync(getUserQuery, identifier);

            if (results.length === 0) {
                console.log('User not found');
                throw new Error("User doesn't exist.");
            }

            console.log('User fetched successfully');
            console.log('Results:', results);
            return results;
        } catch (err) {
            console.error('Error getting user:', err);
            throw err;
        }
    }
}

module.exports = UserRepository;
