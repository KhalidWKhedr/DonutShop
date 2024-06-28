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
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory for CSS, JS, and images
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and urlencoded bodies
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Route to serve main-page.html
app.get('/main-page', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'main-page.html');
  console.log(`Serving main-page.html from: ${filePath}`);
  res.sendFile(filePath);
});

// Use userRoutes and donutRoutes
app.use(userRoutes);
app.use(donutRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/main-page`);
});

//5555555555554444

// Service layer has both model and repo. This handles buisness logic.
