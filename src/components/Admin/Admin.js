import React from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Admin = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Container fixed>
        <Typography variant="h5">Welcome Admin</Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            component={Link}
            to="/admin"
            color="secondary"
            variant="contained"
          >
            Home
          </Button>
          <Button
            component={Link}
            to="profile"
            color="secondary"
            variant="contained"
          >
            Profile
          </Button>
        </Stack>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Admin;
