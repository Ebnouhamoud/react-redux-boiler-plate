import { configureStore } from '@reduxjs/toolkit';
import home from './pages/home/redux';

export const store = configureStore({
  reducer: {
    home: home,
  },
});
