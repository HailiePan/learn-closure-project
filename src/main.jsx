/*
 * Author  hailie.pan
 * Date  2022-12-11 21:43:18
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-11 22:47:38
 * Description  file content
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ConfigRoutes from "@/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigRoutes />
  </BrowserRouter>
);
