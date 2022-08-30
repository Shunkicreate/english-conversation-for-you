import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import App from "./App";
import { WatchTogether } from "./components/WatchTogether";
import { NotFoutnd } from "./components/404";
export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<App uid={null} />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={'/watcht-together'} element={<WatchTogether />} />
          <Route path="*" element={<NotFoutnd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
