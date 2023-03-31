import React, { useMemo } from 'react';
import {
  Typography,
  Card,
  CardContent,
  styled,
  Grid,
} from '@mui/material';

const Text = styled(Typography)(() => ({
  fontFamily: 'Poppins',
  fontWeight: '400',
  color: '#696F79',
}));

export default function QuizResult(props) {
  const { answers, questions } = props;
  const correctAnswers = useMemo(() => questions.filter(
    (question, index) => question.correctAnswer === parseInt(answers[index], 10),
  ).length, [answers]);

  return (
    <Card variant='outlined' sx={{ pt: 3, pb: 3 }}>
      <CardContent>
        <Text sx={{ display: 'flex', justifyContent: 'center', mb: 3 }} variant='h4'>
          Result
        </Text>
        <Text sx={{ display: 'flex', justifyContent: 'center', mb: 3 }} variant='h4'>
          {correctAnswers * 10} / {questions.length * 10} Score
        </Text>
        <Grid container textAlign='center' spacing={2} marginBottom="15px">
          {answers.map((answer, index) => (
            <>
              <Grid item xs={12} md={6}>
                <Text variant='h6'>
                  You answer:{questions[index].options[answer - 1]?.description}</Text>
              </Grid>
              <Grid item xs={12} md={6}>
                <Text variant='h6' sx={{ fontWeight: '600' }}>
                  Correct answer:{questions[index].options[questions[index].correctAnswer - 1].description}
                </Text>
              </Grid>
            </>
          ))}
        </Grid>
        <Text sx={{ display: 'flex', justifyContent: 'center', mb: 3 }} variant='h6'>
          Click Start Quiz to try again.
        </Text>
      </CardContent>
    </Card>
  );
}
