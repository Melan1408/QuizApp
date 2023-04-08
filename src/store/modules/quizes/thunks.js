import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quizes } from '../../../api/api';

const fetchQuizes = createAsyncThunk(`${moduleName}/fetchQuizes}`, async () => {
  const { data } = await quizes.fetch();
  return data;
});

export default {
  fetchQuizes,
};
