import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./layout/Layout";
export function CustomRoute() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
