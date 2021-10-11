import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'signed out',
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.status = action.payload.status;
    },
    logoutUser: (state) => {
      state.status = initialState.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = counterSlice.actions;

export default counterSlice.reducer;
