import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../index.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_REGISTER}/api/register`,
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        setSuccess("Signup completed. Navigate to Log in.");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Please Sign In Fields Cannot be empty");
      console.error(err);
    }
  };

  return (
    <Box sx={{ width: 400 }} role="presentation">
      <form className="signup-form">
        <h2>
          <center>Signup</center>
        </h2>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
        <TextField
          label="Username"
          value={username}
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
          className="signup"
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup"
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup"
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          className="button-signup mt-2"
          onClick={handleSignup}
        >
          Signup
        </Button>
      </form>
    </Box>
  );
}
