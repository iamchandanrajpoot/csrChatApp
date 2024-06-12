import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        404: Not Found
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFound;
