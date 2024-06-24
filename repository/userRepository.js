// repository/userRepository.js
const connection = require('../config/database');

class UserRepository {
    static createUser(userData, callback) {
        const newUser = userData;

        const query = 'INSERT INTO CUSTOMER (F_NAME, L_NAME, EMAIL, ADDRESS, NUMBER, ZIP_CODE, CC_NUMBER, DOB) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [newUser.F_NAME, newUser.L_NAME, newUser.EMAIL, newUser.ADDRESS, newUser.NUMBER, newUser.ZIP_CODE, newUser.CC_NUMBER, newUser.DOB];

        connection.query(query, values, (err, results) => {
            if (err) {
                console.error('Error creating user:', err);
                return callback(err, null);
            }
            console.log('User created successfully');
            callback(null, results);
        });
    }
}

module.exports = UserRepository;
