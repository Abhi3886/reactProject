import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignUpToHide: false,
};

export const SignUpSlice = createSlice({
  name: "SignUpToHide",
  initialState,
  reducers: {
    signUpToHide: (state, action) => {
      state.isSignUpToHide = action.payload;
    },
  },
});

export const { signUpToHide } = SignUpSlice.actions;

const SignUpReducer = SignUpSlice.reducer;
export default SignUpReducer;
