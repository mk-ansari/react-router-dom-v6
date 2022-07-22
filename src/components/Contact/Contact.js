import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Container fixed>
        <Typography variant="h5">Contact</Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            component={Link}
            to="company"
            color="secondary"
            variant="contained"
          >
            Company
          </Button>
          <Button
            component={Link}
            to="support"
            color="secondary"
            variant="contained"
          >
            Support
          </Button>
          <Button
            component={Link}
            to="other"
            color="secondary"
            variant="contained"
          >
            Other
          </Button>
        </Stack>
        <Typography variant="h6" sx={{ mt: 5 }}>
          Nested Route Example
        </Typography>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Contact;
