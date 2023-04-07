import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quizesReducer } from './modules/quizes';
import { quizReducer } from './modules/quiz';

const rootReducer = combineReducers({
  quizesReducer,
  quizReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
