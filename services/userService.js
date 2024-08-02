const userRepository = require('../repository/userRepository');
const userModel = require('../models/userModel');

class UserService {
    static async newUser(SIGNUPEMAIL, SIGNUPPASSWORD) {
        try {
            const { error } = userModel.validateLogin({ EMAIL: SIGNUPEMAIL, PASSWORD: SIGNUPPASSWORD });
            if (error) {
                throw new Error(error.details[0].message);
            }
            return await userRepository.newUser(SIGNUPEMAIL, SIGNUPPASSWORD);
        } catch (error) {
            throw error; // Let the caller handle the error
        }
    }

    static async authenticateUser(EMAIL, PASSWORD) {
        try {
            // Validate email and password (if necessary)
            // Perform any additional logic or checks here

            // Example: Using UserModel for validation (optional)
            const { error } = userModel.validateLogin({ EMAIL: EMAIL, PASSWORD: PASSWORD });
            if (error) {
                throw new Error(error.details[0].message);
            }

            const results = await userRepository.getUserLogin(EMAIL);
            if (results.length === 0) {
                console.log('User not found');
                throw new Error('User not found');
            }

            const user = results[0]; // Assuming results is an array of user objects
            const userPassword = user.PASSWORD; // Extract PASSWORD from user object

            if (userPassword !== PASSWORD) {
                console.log('Authentication failed: Invalid credentials');
                throw new Error('Invalid credentials');
            }

            console.log('Authentication successful');
            return user;
        } catch (error) {
            throw error; // Let the caller handle the error
        }
    }
    static async userAccount(ACCOUNT_ID, F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB){
        try {
            const { error } = userModel.validateAccount(
                {F_NAME: F_NAME, L_NAME: L_NAME, ADDRESS: ADDRESS,
                    PHONE_NUMBER: PHONE_NUMBER, ZIP_CODE: ZIP_CODE, CC_NUMBER: CC_NUMBER, DOB: DOB});
            if (error) {
                throw new Error(error.details[0].message);
            }
            return await userRepository.updateUserAccount(ACCOUNT_ID, F_NAME, L_NAME, ADDRESS, PHONE_NUMBER, ZIP_CODE, CC_NUMBER, DOB);
        } catch (error) {
            throw error; // Let the caller handle the error
        }
    }
}

module.exports = UserService;
