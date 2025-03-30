import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogInToHide: false,
};

export const LogInSlice = createSlice({
  name: "LogInToHide",
  initialState,
  reducers: {
    logInToHide: (state, action) => {
      state.isLogInToHide = action.payload;
    },
  },
});

export const { logInToHide } = LogInSlice.actions;

const LogInReducer = LogInSlice.reducer;
export default LogInReducer;
