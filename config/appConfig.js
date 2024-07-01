const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

function configureApp(app) {
    // Set EJS as the view engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    // Serve static files from the 'public' directory for CSS, JS, and images
    app.use(express.static(path.join(__dirname, '../public')));

    // Middleware to parse JSON and urlencoded bodies
    app.use(cors()); // Enable CORS for all routes
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
}

module.exports = configureApp;
