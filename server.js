const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Database connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
