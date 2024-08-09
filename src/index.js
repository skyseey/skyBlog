import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// 导入路由表
import router from "./router/index";
import "./assets/css/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
