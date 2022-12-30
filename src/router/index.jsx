/*
 * Author  hailie.pan
 * Date  2022-08-23 13:57:24
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-11 22:44:53
 * Description  渲染路由
 */
import React from "react";
import { Spin } from "antd";
import {
  useRoutes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import routes from "./routes";

function Router() {
  let element = useRoutes(renderRoutes(routes));
  return element;
}
export default Router;

function renderRoutes(routeArr) {
  const result = routeArr?.map((item) => {
    let res = { ...item };
    if (!item?.path) return;

    if (res.element && !res.children) {
      res.element = (
        <React.Suspense fallback={<Spin size="large" />}>
          {item.element}
        </React.Suspense>
      );
    }
    // children
    if (item?.children) {
      res.children = renderRoutes(item.children);
    }
    // 重定向
    if (item?.redirect) {
      res.element = <Navigate to={item.redirect} replace />;
    }

    return res;
  });
  return result;
}
