const express = require('express')
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/userRoutes');
const donutRoutes = require('../routes/donutRoutes');
const errorHandler = require('../middleware/errorHandler');

function configure(app) {

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    // Serve static files from the 'public' directory
    app.use(express.static(path.join(__dirname, '../public')));

    // Enable CORS
    app.use(cors());

    // Parse JSON and URL-encoded bodies
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    app.use(userRoutes);
    app.use(donutRoutes);

    // Route to serve main-page.html
    app.get('/main-page', (req, res) => {
        const filePath = path.join(__dirname, '../views', 'main-page.html');
        console.log(`Serving main-page.html from: ${filePath}`);
        res.sendFile(filePath);
    });

    // Global error handler middleware
    app.use(errorHandler);
}

module.exports = {
    configure: configure
};
