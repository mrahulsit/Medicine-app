const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

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
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Register Route
app.post("/api/register", async (req, res) => {
  const { username, password, email } = req.body;
  console.log("Register request received:", username, password, email);

  try {
    const usernameExists = await User.findOne({ username });
    const emailExists = await User.findOne({ email });

    if (usernameExists) {
      console.log("Username already exists:", username);
      return res.status(400).json({ message: "Username already exists" });
    }

    if (emailExists) {
      console.log("Email already exists:", email);
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hashedPassword, email });
    await user.save();

    console.log("User registered successfully:", username);
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login request received:", username);

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("Invalid credentials, user not found:", username);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("User found:", username);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials, password mismatch for user:", username);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("User logged in successfully:", username);
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Error handling for JSON parsing
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    console.error("JSON parsing error:", error.message);
    return res.status(400).json({ message: "Invalid JSON format" });
  }
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
