const util = require('util');
const connection = require('../config/database');

class UserRepository {

    static async newUser(SIGNUPEMAIL, SIGNUPPASSWORD) {
        const newuserquery = 'INSERT INTO ACCOUNTS (EMAIL, PASSWORD) VALUES (?, ?)';
        const values = [SIGNUPEMAIL, SIGNUPPASSWORD];

        try {
            const queryAsync = util.promisify(connection.query).bind(connection);
            return await queryAsync(newuserquery, values);
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                // Duplicate entry error
                console.log('Error:' + err.message);
                throw new Error('Email already exists, please login or recover account');
            } else {
                console.log('Error: ' + err.message);
                console.error('Error creating user:', err);
                throw err;
            }
        }
    }

    static async getUserLogin(EMAIL) {
        console.log('Email to query:', EMAIL); // Check what is being passed to the query
        const getUserQuery = 'SELECT * FROM ACCOUNTS WHERE ACCOUNTS.EMAIL = ?';

        try {
            const queryAsync = util.promisify(connection.query).bind(connection);
            const results = await queryAsync(getUserQuery, EMAIL);

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

    static async updateUserAccount(ACCOUNT_ID, F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB) {
        console.log('Account information to update:', F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB);
        const userAccountUpdate = 'UPDATE ACCOUNTS SET F_NAME = ?, L_NAME = ?, ADDRESS = ?, PHONE_NUMBER = ?, ZIP_CODE = ?, CC_NUMBER = ?, DOB = ? WHERE ACCOUNT_ID = ?';
        const accountValues = [F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB, ACCOUNT_ID]

        try {
            const queryAsync = util.promisify(connection.query).bind(connection);
            // Pass parameters to the query
            return await queryAsync(userAccountUpdate, accountValues);
        } catch (err) {
            console.error('Error updating user information:', err);
            throw err;
        }
    }
}


    module.exports = UserRepository;
