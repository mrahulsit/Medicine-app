const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

const register = require("./RegisterRoute/register.js");
const login = require("./LoginRoute/login.js");
const mail = require("./Mail/Mail.js");

const app = express();

// CORS options setup
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Apply middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Use the routes
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/mail", mail);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Hello from the server!</h1>");
});

// Error handling middleware for JSON parsing
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    console.error("JSON parsing error:", error.message);
    return res.status(400).json({ message: "Invalid JSON format" });
  }
  next();
});

// Start the server and log the URL
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
