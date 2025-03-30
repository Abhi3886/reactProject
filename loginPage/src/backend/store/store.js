import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { SignUpReducer, LogInReducer } from "../../features/index";

export const store = configureStore({
  reducer: { SignUpReducer, LogInReducer },
});
