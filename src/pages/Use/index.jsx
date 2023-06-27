/*
 * Author  hailie.pan
 * Date  2023-02-28 16:29:24
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-03 16:18:47
 * Description  闭包的用途
 */
import React, { useEffect } from "react";
import { Tabs } from "antd";
import ForFn from "./component/forFn";
import Kelihua from "./component/kelihua";
import Fangdoujieliu from "./component/fangdoujieliu";
import Tuozhuai from "./component/zoom";

export default function index() {
  // 什么是闭包？概念、用途、优缺点、应用场景
  // 闭包会涉及到哪些知识？作用域（全局作用域、局部作用域）
  // 应用场景：节流防抖函数柯里化 高阶函数  vue的响应式原理  react fab hooks的原理

  return (
    <div>
      <Tabs
        defaultActiveKey="4"
        // onChange={onChange}
        items={[
          {
            label: `for循环`,
            key: "1",
            children: <ForFn />,
          },
          {
            label: "防抖节流",
            key: "3",
            children: <Fangdoujieliu />,
          },
          {
            label: `柯里化函数`,
            key: "2",
            children: <Kelihua />,
          },
          {
            label: "拖拽放大",
            key: "4",
            children: <Tuozhuai />,
          },
        ]}
      />
    </div>
  );
}
