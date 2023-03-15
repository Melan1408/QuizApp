import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "primary.main",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="row" justifyContent="space-between">
            <Grid >
              <Typography color="white" variant="subtitle1">
                QUIZ App
              </Typography>
            </Grid>
            <Grid >
              <Typography color="white" variant="subtitle1">
                Copyright ©2022. [] Limited
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
}

export default Footer;