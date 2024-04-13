import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
        height: "100vh",
        width: "100%",
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
              <Button onClick={handleLogin} sx={{ mb: 1 }} variant="contained">
                Login
              </Button>
            </form>

            <Typography>Or</Typography>
            <Button
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Signup
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Sign Up
            </Typography>
            <form>
              <TextField
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                sx={{ mb: 2 }}
                label="Name"
                variant="outlined"
                required
              />
              <br />
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{ mb: 2 }}
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
                sx={{ mb: 2 }}
                label="Phone"
                variant="outlined"
                required
              />
              <br />

              <TextField
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                sx={{ mb: 2 }}
                label="Password"
                variant="outlined"
                required
              />
              <br />
              <Button onClick={handleSignUp} sx={{ mb: 1 }} variant="contained">
                Signup
              </Button>
            </form>
            <Typography>Or</Typography>
            <Button onClick={() => setIsLogin(true)}>Login</Button>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
