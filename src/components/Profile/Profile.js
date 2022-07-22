import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Container fixed>
        <Typography variant="h5" sx={{ my: 2 }}>
          Profile
        </Typography>

        <TextField
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter Age"
          type="number"
          variant="outlined"
          onChange={(e) => setAge(e.target.value)}
          sx={{ ml: 2 }}
        />
        <br />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setSearchParams({ name, age })}
        >
          Submit
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Name: {searchParams.get("name")}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Age: {searchParams.get("age")}{" "}
        </Typography>
      </Container>
    </Box>
  );
};

export default Profile;
