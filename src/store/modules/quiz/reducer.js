import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
// eslint-disable-next-line import/no-cycle
import { quizThunks } from './index';

const initialState = {
  quiz: [],
};

/* eslint-disable no-param-reassign */
export const quizSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quizThunks.fetchQuiz.fulfilled, (state, { payload }) => {
      state.quiz = payload;
    });
  },
});

export default quizSlice.reducer;
