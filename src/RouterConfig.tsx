import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import App from "./App";
import { NotFoutnd } from "./components/404";
export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={``} element={<Login />} />
          <Route path={`/Chat`} element={<App />} />
          <Route path="*" element={<NotFoutnd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
