import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container, Box } from '@mui/material';
import QuizCard from '../components/QuizCard';
import { quizesThunks } from '../store/modules/quizes';

const Quiz = () => {
  const { filterQuizes } = useSelector((state) => state.quizesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(quizesThunks.fetchQuizes());
    })();
  }, []);

  return (
    <>
      <Box>
        <Container sx={{ p: '30px 24px' }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {filterQuizes.map((quiz, index) => (
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
