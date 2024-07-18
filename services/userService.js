const userRepository = require('../repository/userRepository');
const userModel = require('../models/userModel');

class UserService {
    static async newUser(signupIdentifier, signupPassword) {
        try {
            const { error } = userModel.validate({ IDENTIFIER: signupIdentifier, PASSWORD: signupPassword });
            if (error) {
                throw new Error(error.details[0].message);
            }

            const results = await userRepository.newUser(signupIdentifier, signupPassword);
            return results;
        } catch (error) {
            throw error; // Let the caller handle the error
        }
    }

    static async authenticateUser(identifier, password) {
        try {
            // Validate identifier and password (if necessary)
            // Perform any additional logic or checks here

            // Example: Using UserModel for validation (optional)
            const { error } = userModel.validate({ IDENTIFIER: identifier, PASSWORD: password });
            if (error) {
                throw new Error(error.details[0].message);
            }

            const results = await userRepository.getUserLogin(identifier);
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
    static async userAcount(F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB){
        try {
            const { error } = userModel.validate({ IDENTIFIER: signupIdentifier, PASSWORD: signupPassword });
            if (error) {
                throw new Error(error.details[0].message);
            }
        }
        catch{
        if (error)
        throw error;
        }
    }
}

module.exports = UserService;
