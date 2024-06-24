const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const donutRoutes = require('./routes/donutRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client', 'views')); // Set path to 'client/views'

// Middleware to parse JSON and urlencoded bodies
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Set static directory for serving HTML, CSS, JS, and images
app.use(express.static(path.join(__dirname, 'client')));

// Route to serve main-page.html
app.get('/main-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'main-page.html'));
  console.log('GET /main-page endpoint accessed');
});

// Use userRoutes and donutRoutes
app.use(userRoutes);
app.use(donutRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/main-page.html`);
});
