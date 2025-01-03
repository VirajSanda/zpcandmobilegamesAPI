const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes")); // New tasks routes
app.use("/api/articles", require("./routes/articleRoutes"));
app.use("/api/appdetails", require('./routes/steamRoutes'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
