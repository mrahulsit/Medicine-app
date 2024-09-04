// server.js
<<<<<<< HEAD
import express, { json } from "express";
import registerRoute from "./RegisterRoute/register.js";
import loginRoute from "./LoginRoute/login.js";
import mail from "./Mail/Mail.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
=======
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
>>>>>>> 053d89572a167be3423123194494a0cd7e14eb2f

const app = express();
const port = process.env.PORT || 5000;

<<<<<<< HEAD
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Middleware
app.use(json());
app.use(cors(corsOptions));
=======
// Middleware
app.use(express.json());

// Import routes
const registerRoute = require("./RegisterRoute/register");
const loginRoute = require("./LoginRoute/login");
>>>>>>> 053d89572a167be3423123194494a0cd7e14eb2f

// Use routes
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
<<<<<<< HEAD
app.use("/api/mail", mail);
=======
>>>>>>> 053d89572a167be3423123194494a0cd7e14eb2f

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
