import axios from './server';

const quizes = {
  fetch: () => axios.get('/quizes').then((data) => data),
};

const quiz = {
  fetch: (quizName) => axios.get(`/${quizName}`).then((data) => data),
};

export { quizes, quiz };
