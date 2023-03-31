import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
  Grid,
  styled,
} from '@mui/material';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import Countdown from 'react-countdown';
// eslint-disable-next-line import/no-extraneous-dependencies
import { quiz } from '../api/api';
import QuestionCard from '../components/QuestionCard';
import Result from '../components/QuizResult';

const Text = styled(Typography)(() => ({
  fontFamily: 'Poppins',
  fontWeight: '400',
  color: '#696F79',
}));

const QuizStart = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizData, setQuiz] = useState([]);
  const date = new Date().toJSON().slice(0, 10);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  let finishedQuiz = false;
  let currentQuestion = {};

  const clockRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quiz.fetch(name);
        setQuiz(data[0]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (startQuiz) {
    finishedQuiz = currentQuestionIndex === quizData.questions.length;
    currentQuestion = quizData.questions[currentQuestionIndex];
  }

  const goToNext = () => {
    setCurrentQuestionIndex((prevState) => prevState + 1);
  };

  const submitAnswer = (value) => {
    if (!finishedQuiz) {
      setAnswers((prevState) => [...prevState, value]);
      goToNext();
      clockRef.current.start();
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const renderer = ({ minutes, seconds }) => <Box sx={{
    display: `${startQuiz && !finishedQuiz === true ? 'inherit' : 'none'}`,
    mb: '15px',
  }}>
  <Text textAlign='center' variant="h5">Time for 1 question:</Text>
  <Text textAlign='center' variant="h3">{minutes} : {seconds}</Text>
  <Box display="flex" justifyContent="space-between" sx={{ maxWidth: { xs: '140px', sm: '160px' }, m: 'auto' }}>
    <Text variant="h6">minutes</Text>
    <Text variant="h6">seconds</Text>
  </Box>
</Box>;

  const startQuizHandle = () => {
    setStartQuiz(true);
    clockRef.current.start();
    restartQuiz();
  };

  if (loading) return (<>Loading...</>);
  if (error) return (<Typography variant='h2'>Page {name} in progress!</Typography>);
  return (
    <Box>
      <Container maxWidth="lg" sx={{ p: '30px 0' }}>
      <Box sx={{
        backgroundColor: 'white',
        borderRadius: '12px',
        p: '20px 30px',
        mb: '15px',
      }}>
        <Typography variant='h4' sx={{ fontFamily: 'Poppins', fontWeight: '700', color: '#696F79' }}>
            {quizData.name} Quiz
          </Typography>
          <Typography variant='h5' sx={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            color: '#696F79',
            mb: '10px',
          }}>
          Read the following instructions
          </Typography>
      <Grid container paddingBottom="10px" spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={quizData.image}
            alt={quizData.name}
            width='100%'
            style={{ borderRadius: '12px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h5' sx={{ fontFamily: 'Poppins', fontWeight: '400', color: '#696F79' }}>
            <strong>Date:</strong>&emsp;{date}
          </Typography>
          <Typography variant='h5' sx={{ fontFamily: 'Poppins', fontWeight: '400', color: '#696F79' }}>
          <strong>Time limit:</strong>&emsp;{quizData.time} Mins
          </Typography>
          <Typography variant='h5' sx={{ fontFamily: 'Poppins', fontWeight: '400', color: '#696F79' }}>
          <strong>Attempts:</strong>&emsp;{quizData.attempts}
          </Typography>
          <Typography variant='h5' sx={{ fontFamily: 'Poppins', fontWeight: '400', color: '#696F79' }}>
          <strong>Points:</strong>&emsp;{quizData.points}
          </Typography>
          </Grid>
      </Grid>
      <Typography variant='h5' sx={{
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#696F79',
        mb: '10px',
      }}>
          Instructions
          </Typography>
          <Typography variant='h5' sx={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            color: '#696F79',
            mb: '10px',
          }}>
          {quizData.discription}
          </Typography>
        <Countdown
        date={Date.now() + quizData.time * (60000 / quizData.questions.length)}
        renderer={renderer}
        autoStart={false}
        ref={clockRef}
        onComplete={() => submitAnswer(0)}
        />
          <Box display='flex' justifyContent='end'>
          <Button variant='h5' onClick={startQuizHandle} sx={{
            p: '7px 22px',
            color: '#696F79',
            background: 'white',
            borderRadius: '12px',
            fontFamily: 'Poppins',
            fontWeight: '600',
            border: '2px solid #696F79',
            ':hover': { color: 'white', background: '#696F79' },
          }}>
            Start Quiz
          </Button>
          </Box>
      </Box>
      {startQuiz
        ? <Box sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          p: '20px 30px',
        }}>
          {finishedQuiz
            ? <Result
            restartQuiz={restartQuiz}
            answers={answers}
            questions={quizData.questions}/>
            : <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            submitAnswer={submitAnswer}
            />}
      </Box>
        : <></>}
      </Container>
    </Box>
  );
};

export default QuizStart;
