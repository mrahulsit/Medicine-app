const bcrypt = require("bcryptjs");
const User = require("../Schema/models"); // Ensure this path is correct
const express = require("express");
const router = express.Router();

// Register Route
router.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  console.log("Register request received:", username, password, email);

  try {
    const usernameExists = await User.findOne({ username });
    const emailExists = await User.findOne({ email });

    if (usernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hashedPassword, email });
    await user.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
