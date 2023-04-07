import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Create = () => {
  const { pathname } = useLocation();

  return (<Box>
    <Container sx={{ p: 8 }}>
      <Typography variant='h2'>
        Page {pathname.slice(1)} in progress!
      </Typography>
    </Container >
  </Box>
  );
};
export default Create;
