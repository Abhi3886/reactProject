import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.jsx";
import { LogIn, SignUp } from "../layouts/index.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Log-in" element={<LogIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
    </Route>
  )
);
