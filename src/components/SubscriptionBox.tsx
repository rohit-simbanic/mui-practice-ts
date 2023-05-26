import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SubscribeCommonBox from "./SubscribeCommonBox";

const SubscriptionBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        padding: "2.5rem",
        borderRadius: "0.75rem",
        textAlign: "center",
        width: "70%",
        margin: "auto",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Get the most out of your mobile with the right subscription
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "23px" }}>
        Get the most out of your mobile with the right subscription
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item sm={12} md={6} lg={4}>
          <SubscribeCommonBox />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <SubscribeCommonBox />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <SubscribeCommonBox />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscriptionBox;
