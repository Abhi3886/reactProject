import { configureStore } from "@reduxjs/toolkit";
import { SignUpReducer, LogInReducer } from "../../features";

export const store = configureStore({
  reducer: {
    SignUpToHide: SignUpReducer,
    LogInToHide: LogInReducer,
  },
});
