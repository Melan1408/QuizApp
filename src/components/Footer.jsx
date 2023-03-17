import React from 'react';
import { Box, Container, Grid, Typography, styled } from "@mui/material";

const FooterContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  backgroundColor: "#42a5f5",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  marginTop: "auto",
}));


const Footer = () => {
    return (
      <FooterContainer>
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
      </FooterContainer>
    );
}

export default Footer;
