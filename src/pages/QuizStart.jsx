import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Countdown from 'react-countdown';
import { quizThunks } from '../store/modules/quiz';
import QuestionCard from '../components/QuestionCard';
import Result from '../components/QuizResult';
import BasicText from '../components/styled/BasicText';
import BasicButton from '../components/styled/BasicButton';

const QuizStart = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const { quiz } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  let finishedQuiz = false;
  let currentQuestion = {};
  const date = new Date().toJSON().slice(0, 10);

  const clockRef = useRef();

  useEffect(() => {
    (async () => {
      await dispatch(quizThunks.fetchQuiz(name));
      setLoading(false);
    })();
  }, []);

  if (startQuiz) {
    finishedQuiz = currentQuestionIndex === quiz.questions.length;
    currentQuestion = quiz.questions[currentQuestionIndex];
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
    <BasicText textAlign='center' variant="h5">Time for 1 question:</BasicText>
    <BasicText textAlign='center' variant="h3">{minutes} : {seconds}</BasicText>
    <Box display="flex" justifyContent="space-between" sx={{ maxWidth: { xs: '140px', sm: '160px' }, m: 'auto' }}>
      <BasicText variant="h6">minutes</BasicText>
      <BasicText variant="h6">seconds</BasicText>
    </Box>
  </Box>;

  const startQuizHandle = () => {
    setStartQuiz(true);
    clockRef.current.start();
    restartQuiz();
  };

  if (loading) return (<>Loading...</>);
  if (Object.keys(quiz).length === 0) return (<Typography variant='h2'>Page {name} in progress!</Typography>);
  return (
    <Box>
      <Container maxWidth="lg" sx={{ p: '30px 0' }}>
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          p: '20px 30px',
          mb: '15px',
        }}>
          <BasicText variant='h4' sx={{ fontWeight: '700' }}>
            {quiz.name} Quiz
          </BasicText>
          <BasicText variant='h5' sx={{
            mb: '10px',
          }}>
            Read the following instructions
          </BasicText>
          <Grid container paddingBottom="10px" spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={quiz.image}
                alt={quiz.name}
                width='100%'
                style={{ borderRadius: '12px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicText variant='h5'>
                <strong>Date:</strong>&emsp;{date}
              </BasicText>
              <BasicText variant='h5'>
                <strong>Time limit:</strong>&emsp;{quiz.time} Mins
              </BasicText>
              <BasicText variant='h5'>
                <strong>Attempts:</strong>&emsp;{quiz.attempts}
              </BasicText>
              <BasicText variant='h5'>
                <strong>Points:</strong>&emsp;{quiz.points}
              </BasicText>
            </Grid>
          </Grid>
          <BasicText variant='h5' sx={{ fontWeight: '600', mb: '10px' }}>
            Instructions
          </BasicText>
          <BasicText variant='h5' sx={{ mb: '10px' }}>
            {quiz.discription}
          </BasicText>
          <Countdown
            date={Date.now() + quiz.time * (60000 / quiz.questions.length)}
            renderer={renderer}
            autoStart={false}
            ref={clockRef}
            onComplete={() => submitAnswer(0)}
          />
          <Box display='flex' justifyContent='end'>
            <BasicButton variant='h5' onClick={startQuizHandle} sx={{
              p: '7px 22px',
            }}>
              Start Quiz
            </BasicButton>
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
                questions={quiz.questions} />
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
