import axios from './server';

const quizes = {
  fetch: () => axios.get('/quizes').then((data) => data),
  post: (quiz) => axios.post('/quizes', quiz).then((data) => data),
  put: (quiz) => axios.put(`/quizes/${quiz.id}`, quiz).then((data) => data),
};

const quiz = {
  fetch: (quizName) => axios.get(`/${quizName}`).then((data) => data),
};

export { quizes, quiz };
