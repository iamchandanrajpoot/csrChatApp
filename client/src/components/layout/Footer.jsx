import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      backgroundColor="#1565c0"
      component={"footer"}
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        height: "50px",
        lineHeight: "50px",
      }}
    >
      <Box
        sx={{
          fontSize: "14px",
          color: "white",
        }}
      >
        &copy; {new Date().getFullYear()} Copyright
      </Box>
    </Box>
  );
}

export default Footer;
