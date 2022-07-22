import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Container>
        <Typography variant="h5">Product {id}</Typography>
        <Button onClick={() => navigate(-1)} variant="contained" sx={{ mt: 2 }}>
          Back
        </Button>
      </Container>
    </Box>
  );
};

export default Product;
