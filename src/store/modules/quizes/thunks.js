import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quizes } from '../../../api/api';

const fetchQuizes = createAsyncThunk(`${moduleName}/fetchQuizes}`, async () => {
  const { data } = await quizes.fetch();
  return data;
});

const postQuiz = createAsyncThunk(`${moduleName}/postQuiz}`, async (quiz) => {
  const { data } = await quizes.post(quiz);
  return data;
});

const putQuiz = createAsyncThunk(`${moduleName}/putQuiz}`, async (quiz) => {
  const { data } = await quizes.put(quiz);
  return data;
});

export default {
  fetchQuizes,
  postQuiz,
  putQuiz,
};
