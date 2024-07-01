require('dotenv').config(); // Load environment variables from .env file
const app = require('./config/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/main-page`);
});
