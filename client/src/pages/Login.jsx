import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { CameraAlt as CamraIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  async function handleLogin(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/api/users/login", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  function handleSignUp(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      phone,
      password,
    };
    console.log(user);
    axios
      .post("", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container
      component={"main"}
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#ddd",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          padding: 4,
          flexDirection: "column",
          alignItems: "center",
          // width: "100%",
        }}
      >
        {isLogin ? (
          <>
            <Typography sx={{ mb: 2 }} variant="h5">
              Login
            </Typography>
            <form>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
                label="Email"
                variant="outlined"
                required
              />
              <br />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
                label="Password"
                variant="outlined"
                required
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                onClick={handleLogin}
                sx={{ mb: 1 }}
                disabled={!email || !password}
              >
                Login
              </Button>
            </form>

            <Typography>Or</Typography>
            <Button onClick={toggleLogin}>Signup</Button>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Sign Up
            </Typography>
            <form>
              <Stack position={"relative"} width={"6rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "6rem",
                    height: "6rem",
                    objectFit: "contain",
                  }}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CamraIcon />
                    <VisuallyHiddenInput
                      type="file"
                      // onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              <TextField
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                sx={{ mb: 1, mt: 1 }}
                label="Name"
                type="text"
                variant="outlined"
                required
              />
              <br />
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{ mb: 1 }}
                label="Email"
                variant="outlined"
                required
              />
              <br />
              <TextField
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                sx={{ mb: 1 }}
                label="Phone"
                type="number"
                variant="outlined"
                required
              />
              <br />

              <TextField
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                sx={{ mb: 1 }}
                label="Password"
                type="password"
                variant="outlined"
                required
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                onClick={handleSignUp}
                sx={{ mb: 1 }}
                disabled={!email || !password || !phone || !name}
              >
                Signup
              </Button>
            </form>
            <Typography>Or</Typography>
            <Button onClick={toggleLogin}>Login</Button>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
