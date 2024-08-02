const userRepository = require('../repository/userRepository');
const userModel = require('../models/userModel');

class UserService {
    static async newUser(email, signupPassword) {
        try {
            const { error } = userModel.validateLogin({ EMAIL: email, PASSWORD: signupPassword });
            if (error) {
                throw new Error(error.details[0].message);
            }
            const results = await userRepository.newUser(email, signupPassword);
            return results;
        } catch (error) {
            throw error; // Let the caller handle the error
        }
    }

    static async authenticateUser(email, password) {
        try {
            // Validate email and password (if necessary)
            // Perform any additional logic or checks here

            // Example: Using UserModel for validation (optional)
            const { error } = userModel.validateLogin({ EMAIL: email, PASSWORD: password });
            if (error) {
                throw new Error(error.details[0].message);
            }

            const results = await userRepository.getUserLogin(email);
            if (results.length === 0) {
                console.log('User not found');
                throw new Error('User not found');
            }

            const user = results[0]; // Assuming results is an array of user objects
            const userPassword = user.PASSWORD; // Extract PASSWORD from user object

            if (userPassword !== password) {
                console.log('Authentication failed: Invalid credentials');
                throw new Error('Invalid credentials');
            }

            console.log('Authentication successful');
            return user;
        } catch (error) {
            throw error; // Let the caller handle the error
        }
    }
    static async userAccount(fname, lname, address, phone_number, zip_code, cc_number, dob){
        try {
            const { error } = userModel.validateAccount({fname, lname, address, phone_number, zip_code, cc_number, dob});
            if (error) {
                throw new Error(error.details[0].message);
            }
            return await userRepository.userAcount(fname, lname, address, phone_number, zip_code, cc_number, dob);
        } catch (error) {
            throw error; // Let the caller handle the error
        }
    }
}

module.exports = UserService;
