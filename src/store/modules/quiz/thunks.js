import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quiz } from '../../../api/api';

const fetchQuiz = createAsyncThunk(`${moduleName}/fetchQuiz}`, async (name) => {
  try {
    const { data } = await quiz.fetch(name);
    return data[0];
  } catch (err) {
    console.log(err);
    return {};
  }
});

export default {
  fetchQuiz,
};
