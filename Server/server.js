const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const register = require("./RegisterRoute/register.js");
const login = require("./LoginRoute/login.js");

app.use("/api/register", register);
app.use("/api/login", login);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello from the server!</h1>");
});

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    console.error("JSON parsing error:", error.message);
    return res.status(400).json({ message: "Invalid JSON format" });
  }
  next();
});

const corsOptions = {
  origin: process.env.BASE_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Authorization",
  ],
  credentials: true,
  secure: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server running at : http://localhost:${port}`);
});
