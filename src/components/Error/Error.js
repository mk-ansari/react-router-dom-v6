import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Container fixed sx={{ textAlign: "center" }}>
        <Typography variant="h5">404 Page Not Found...!</Typography>
        <Button
          component={Link}
          to="/home"
          color="secondary"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Go To Home
        </Button>
      </Container>
    </Box>
  );
};

export default Error;
