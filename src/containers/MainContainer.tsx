// src/containers/MainContainer.tsx
import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { Grid, Typography, Button } from "@mui/material";

const MainContainer: React.FC = () => {
  const testValue = 1;

  return (
    <MainTemplate testParams={testValue}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Welcome to Our Website
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Explore our services and products.
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default MainContainer;
