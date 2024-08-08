import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import Signup from "./Signup.jsx";
import "../index.css";

export default function Login() {
  const [state, setState] = useState({ right: false });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/login`,
        {
          username,
          password,
        }
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true);
        setState({ ...state, right: false });
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("Error during login. Please try again.");
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
    >
      {showSignup ? (
        <Signup />
      ) : (
        <form className="login-form">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <div className="buttonFlex">
            <Button
              variant="contained"
              color="primary"
              className="button-Login"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="button-Signup"
              onClick={() => setShowSignup(true)}
            >
              Signup
            </Button>
          </div>
        </form>
      )}
    </Box>
  );

  return (
    <>
      <div>
        {isLoggedIn === true ? (
          <>
            <span
              onClick={toggleDrawer("right", true)}
              style={{ color: "#ffffff" }}
            >
              {`${username}`}
            </span>
          </>
        ) : (
          <span
            onClick={toggleDrawer("right", true)}
            style={{ color: "#ffffff" }}
          >
            Hello, Log in
          </span>
        )}
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </div>
    </>
  );
}
