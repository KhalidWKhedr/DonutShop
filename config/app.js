const express = require('express');
const path = require('path');
const configureApp = require('./appConfig');
const userRoutes = require('../routes/userRoutes');
const donutRoutes = require('../routes/donutRoutes');
const errorHandler = require('../middleware/errorHandler');

const app = express();

// Configure the app
configureApp(app);

// Route to serve main-page.html
app.get('/main-page', async (req, res, next) => {
    try {
        const filePath = path.join(__dirname, '../views', 'main-page.html');
        console.log(`Serving main-page.html from: ${filePath}`);
        res.sendFile(filePath);
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
});

// Use userRoutes and donutRoutes
app.use(userRoutes);
app.use(donutRoutes);

// Global error handler middleware
app.use(errorHandler);

module.exports = app;
