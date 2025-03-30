import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogInToHide: false,
};

const LogInSlice = createSlice({
  name: "LogInToHide",
  initialState,
  reducers: {
    logInToHide: (state, action) => {
      state.isLogInToHide = action.payload;
    },
  },
});

const { logInToHide } = LogInSlice.actions;

const LogInReducer = LogInSlice.reducer;

export default { logInToHide, LogInReducer, LogInSlice };
