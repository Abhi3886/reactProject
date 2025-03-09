import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CustomRoute } from "./CustomRoute.jsx";
import { Home, About, Contact, User, Github } from "./layout/Layout";

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
        <Route path=":user" element={<User />} />
      </Route>

      <Route path="github" element={<Github />} />
      <Route
        path="*"
        element={<div className="w-full bg-gray-800 ">Not Found</div>}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
