const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('../middleware/errorHandler');
const mime = require("mime-types")

function configureApp(app) {
    // Middleware setup
    app.use(cookieParser());
    app.use(session({
        secret: 'your_secret_here',
        resave: true,
        saveUninitialized: true
    }));

    // Middleware to set correct Content-Type header for static files
    app.use('/public', express.static(path.join(__dirname, '../public'), {
        setHeaders: async (res, filePath) => {
            try {
                const contentType = mime.lookup(filePath);
                if (contentType) {
                    res.setHeader('Content-Type', contentType);
                }
            } catch (error) {
                console.error('Error setting Content-Type:', error.message);
            }
        },
    }));

    // View engine setup
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    // Serve static files from the 'public' directory
    app.use(express.static(path.join(__dirname, '../public')));

    // Enable CORS
    app.use(cors());

    // Parse JSON and URL-encoded bodies
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Error handling middleware
    app.use(errorHandler);
}

module.exports = {
    configureApp: configureApp
};
