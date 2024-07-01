// app.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const appConfig = require('./appConfig'); // Corrected path to appConfig.js
const userRoutes = require('../routes/userRoutes'); // Corrected path to userRoutes.js
const donutRoutes = require('../routes/donutRoutes'); // Corrected path to donutRoutes.js


const app = express();

// Configure the app using appConfig
appConfig.configureApp(app);

app.get('/main-page', (req, res) => {
    console.log(`Serving main-page.html`);
    res.sendFile('views/main-page.html', { root: __dirname + '/../' });
});


// Define routes
app.use(userRoutes);
app.use(donutRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/main-page`);
});

module.exports = app;
