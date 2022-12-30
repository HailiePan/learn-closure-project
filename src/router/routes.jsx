/*
 * Author  hailie.pan
 * Date  2022-08-26 11:36:11
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-11 22:48:15
 * Description  路由配置
 */
import BaseLayouts from "../layouts";
import Closure from "../pages/Closure";
import Stack from "../pages/Stack";

const routes = [
  {
    label: "",
    path: "/",
    redirect: "/content/closure",
  },
  {
    label: "展示内容页",
    path: "/content",
    element: <BaseLayouts />,
    children: [
      {
        label: "闭包",
        path: "/content/closure",
        element: <Closure />,
      },
      {
        label: "堆栈",
        path: "/content/stack",
        element: <Stack />,
      },
    ],
  },
];

export default routes;
