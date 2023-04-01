import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import BasicText from './styled/BasicText';

export default function QuizResult({ answers, questions }) {
  const correctAnswers = useMemo(() => questions.filter(
    (question, index) => question.correctAnswer === parseInt(answers[index], 10),
  ).length, [answers]);

  return (
    <Card variant='outlined' sx={{ pt: 3, pb: 3 }}>
      <CardContent>
        <BasicText sx={{ display: 'flex', justifyContent: 'center', mb: 3 }} variant='h4'>
          Result
        </BasicText>
        <BasicText sx={{ display: 'flex', justifyContent: 'center', mb: 3 }} variant='h4'>
          {correctAnswers * 10} / {questions.length * 10} Score
        </BasicText>
        {answers.map((answer, index) => (
          <Grid container textAlign='center' spacing={2} marginBottom="15px" key={index}>
            <Grid item xs={12} md={6}>
              <BasicText variant='h6'>
                You answer:{questions[index].options[answer - 1]?.description}</BasicText>
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicText variant='h6' sx={{ fontWeight: '600' }}>
                Correct answer:{questions[index].options[questions[index].correctAnswer - 1].description}
              </BasicText>
            </Grid>
          </Grid>
        ))}
        <BasicText sx={{ display: 'flex', justifyContent: 'center', mb: 3 }} variant='h6'>
          Click Start Quiz to try again.
        </BasicText>
      </CardContent>
    </Card>
  );
}
