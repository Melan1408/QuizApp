import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constant';

const filterQuizes = createAction(`${moduleName}/filterQuizes`, (payload) => ({ payload }));

export default {
  filterQuizes,
};
