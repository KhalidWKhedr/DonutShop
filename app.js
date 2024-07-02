// app.js
require('dotenv').config({ path: './config/.env' });
const express = require('express');
const appConfig = require('./config/appConfig');
const userRoutes = require('./routes/userRoutes');
const donutRoutes = require('./routes/donutRoutes');
const path = require('path');
const app = express();

// Configure the app using appConfig
appConfig.configureApp(app);

// Route to serve main-page.html
app.get('/main-page', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'main-page.html'); // Adjusted file path
    console.log(`Serving main-page.html from: ${filePath}`);
    res.sendFile(filePath);
});

// Define routes
app.use(userRoutes);
app.use(donutRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/main-page`);
});

module.exports
