import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer'; // default export from reducer.js

export const store = configureStore({
  reducer
});