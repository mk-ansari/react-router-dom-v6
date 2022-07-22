import React, { useState } from "react";
import { Box, Grid, styled, Paper, Container } from "@mui/material";
import { useParams, Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              component={Link}
              to={`/product/${index}`}
              sx={{ textDecoration: "none" }}
              key={index}
            >
              <Item>Product {index}</Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Product;
