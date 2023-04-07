import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
// eslint-disable-next-line import/no-cycle
import { quizesActions, quizesThunks } from './index';

const initialState = {
  quizes: [],
  filterQuizes: [],
};

/* eslint-disable no-param-reassign */
export const quizesSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quizesActions.filterQuizes, (state, { payload }) => {
      console.log(payload);
      if (payload === '') state.filterQuizes = state.quizes;
      else state.filterQuizes = state.quizes.filter((quiz) => quiz.name.toLowerCase().indexOf(payload) > -1);
    });
    builder.addCase(quizesThunks.fetchQuizes.fulfilled, (state, { payload }) => {
      state.quizes = payload;
      state.filterQuizes = payload;
    });
  },
});

export default quizesSlice.reducer;
