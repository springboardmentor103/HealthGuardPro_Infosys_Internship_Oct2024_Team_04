// const express = require('express');

// const dotenv = require('dotenv');

// const mongoose = require('mongoose');

// const cors = require('cors');

// const userRoutes = require('./routes/userRoutes');

// dotenv.config();

// const app = express();

// app.use(cors());

// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology :true })

// .then(() => console.log('MongoDB Connected'))

// .catch((err) => console.error('Error connecting to MongoDB:',err));

// // Routes

// app.use('/api/users', userRoutes);

// app.get('/', (req, res) => { res.send('Backend is running!'); });

// app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); 
//   });

require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors'); // Import CORS
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const changePasswordRoutes = require('./routes/changePasswordRoutes');
const userRoutes =require('./routes/userRoutes');
const otpRoutes = require('./routes/otpRoutes');
const app = express();

const nutritionRoutes = require('./routes/nutritionRoutes');

// Enable CORS
app.use(cors()); // Allow all origins by default

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use('/api/nutrition', nutritionRoutes);

// API endpoints
app.use('/api', nutritionRoutes);

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