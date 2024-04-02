// Import required modules using CommonJS syntax
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const workoutRoutes = require("./routers/workouts");
const userRoutes = require("./routers/user");

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Define routes
app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/api", (req, res) => {
  res.json("hello api");
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI || "default_connection_string", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // Start the Express server
    app.listen(port, () => {
      console.log(`Connected to database and service listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
