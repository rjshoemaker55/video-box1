import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    component: '',
    data: '',
  },
  reducers: {
    setPageContent: (state, action) => {
      state.component = action.payload.component;
      state.data = action.payload.data;
    },
  },
});

export const { setPageContent } = contentSlice.actions;
export const getPageContent = (state) => state;

export default contentSlice.reducer;
