import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CustomRoute } from "./CustomRoute.jsx";
import {
  Home,
  About,
  Contact,
  User,
  Github,
  GithubInfoLoader,
} from "./layout/Layout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CustomRoute />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={GithubInfoLoader} path="github" element={<Github />} />
      <Route
        path="*"
        element={
          <div className="w-max  text-orange-600 font-medium text-5xl">
            Not Found !!!!
          </div>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
