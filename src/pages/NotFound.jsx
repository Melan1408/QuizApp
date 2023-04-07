import React from 'react';
import { Container, Box } from '@mui/material';
import PageNotFound from '../images/PageNotFound.jpg';

const NotFound = () => (
  <Box>
    <Container sx={{ p: 8 }} maxWidth="xl">
      <img src={PageNotFound} width={'100%'} />
    </Container >
  </Box>
);

export default NotFound;
