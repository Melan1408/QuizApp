import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Container, Box } from '@mui/material';
import QuizCard from '../components/QuizCard';

const Favorite = () => {
  const { quizes } = useSelector((state) => state.quizesReducer);
  const favoriteQuizes = quizes.filter((quiz) => quiz.favorite);

  return (
    <>
      <Box>
        <Container sx={{ p: '30px 24px' }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {favoriteQuizes.map((quiz, index) => (
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
export default Favorite;
