import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Container fixed>
        <Typography variant="h5">About</Typography>
        <Button
          component={Link}
          to="/contact"
          color="secondary"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Go To Contact
        </Button>
      </Container>
    </Box>
  );
};

export default About;
