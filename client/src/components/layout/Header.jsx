import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <AppBar position="static" sx={{ padding: "0px" }}>
        <Toolbar variant="dense">
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            CsrChat
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/logout">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
