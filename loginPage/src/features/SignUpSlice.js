import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignUpToHide: false,
};

const SignUpSlice = createSlice({
  name: "SignUpToHide",
  initialState,
  reducers: {
    signUpToHide: (state, action) => {
      state.isSignUpToHide = action.payload;
    },
  },
});

const { signUpToHide } = SignUpSlice.actions;
const SignUpReducer = SignUpSlice.reducer;

export default { SignUpSlice, signUpToHide, SignUpReducer };
