/*
 * Author  hailie.pan
 * Date  2022-08-26 11:36:11
 * LastEditors  hailie.pan
 * LastEditTime  2023-05-24 14:32:35
 * Description  路由配置
 */
import BaseLayouts from "../layouts";
import Closure from "../pages/Closure";
import DemoByMDN from "../pages/Stack";
import Simple from "../pages/Simple";
import Use from "../pages/Use";
import Timeline from "../pages/Timeline";

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
        label: "时间线",
        path: "/content/timeline",
        element: <Timeline />,
      },
      {
        label: "相关概念",
        path: "/content/closure",
        element: <Closure />,
      },
      {
        label: "简单认识",
        path: "/content/simple",
        element: <Simple />,
      },
      // {
      //   label: "mdn中的例子",
      //   path: "/content/demoByMDN",
      //   element: <DemoByMDN />,
      // },
      {
        label: "使用场景",
        path: "/content/use",
        element: <Use />,
      },
    ],
  },
];

export default routes;
