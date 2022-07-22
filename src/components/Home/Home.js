import React from "react";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/about");
  };
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Container fixed>
        <Typography variant="h5">Welcome To Home</Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            component={Link}
            to="/about"
            color="secondary"
            variant="contained"
          >
            Go To About
          </Button>
          <Button color="secondary" variant="contained" onClick={redirect}>
            Navigate
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
