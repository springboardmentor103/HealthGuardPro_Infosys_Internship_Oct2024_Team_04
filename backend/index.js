// Install all the deprndencies

require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors'); // Import CORS
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const changePasswordRoutes = require('./routes/changePasswordRoutes');
const userRoutes =require('./routes/userRoutes');
const otpRoutes = require('./routes/otpRoutes');
const app = express();

// Enable CORS
app.use(cors()); // Allow all origins by default

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to the database
connectDB();
// Use the user routes
app.use('/api/users', userRoutes); // Add the userRoutes middleware
// Use the change password route
app.use('/api', changePasswordRoutes);

// Use OTP routes
  app.use('/api', otpRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});