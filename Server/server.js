// server.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Import routes
const registerRoute = require("./RegisterRoute/register");
const loginRoute = require("./LoginRoute/login");

// Use routes
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
