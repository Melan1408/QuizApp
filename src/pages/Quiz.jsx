import React, { useState, useEffect } from 'react';
import { Grid, Container, Box } from '@mui/material';
import { quizes } from '../api/api';
import QuizCard from '../components/QuizCard';

const Quiz = () => {
  const [quizesData, setQuizes] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await quizes.fetch();
      setQuizes(data);
    })();
  }, []);

  return (
    <>
      <Box>
        <Container sx={{ p: '30px 24px' }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {quizesData.map((quiz, index) => (
              <QuizCard
                key={index}
                quiz={quiz}
              />))}
          </Grid>
        </Container >
      </Box>
    </>
  );
};

export default Quiz;
