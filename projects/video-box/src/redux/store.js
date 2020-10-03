import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';

export default configureStore({
  reducer: {
    content: contentReducer,
  },
});
