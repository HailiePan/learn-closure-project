/*
 * Author  hailie.pan
 * Date  2022-12-11 22:37:54
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-11 22:37:54
 * Description  file content
 */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
