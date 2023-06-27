/*
 * Author  hailie.pan
 * Date  2022-12-11 22:36:17
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-03 16:43:26
 * Description  file content
 */
import React, { useState } from "react";
import { Tabs } from "antd";
import Function01 from "./component/Function01";
import Function02 from "./component/Function02";
import Function03 from "./component/Function03";
import Function04 from "./component/Function04";
import Function05 from "./component/Function05";
import Function06 from "./component/Function06";
import Function07 from "./component/Function07";
import Function08 from "./component/Function08";

export default function Closure() {
  const [showModal, setShowModal] = useState("01");

  const onChange = (key) => {
    setShowModal(key);
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `函数的执行过程`,
            key: "1",
            children: <Function01 />,
          },
          {
            label: `一个不会被销毁的函数执行空间`,
            key: "2",
            children: <Function02 />,
          },
          {
            label: `闭包`,
            key: "3",
            children: <Function03 />,
          },
          {
            label: `闭包销毁`,
            key: "4",
            children: <Function04 />,
          },
          {
            label: `栈内存堆内存`,
            key: "5",
            children: <Function05 />,
          },
          {
            label: `全局作用域、局部作用域`,
            key: "6",
            children: <Function06 />,
          },
          {
            label: `柯里化函数`,
            key: "7",
            children: <Function07 />,
          },
          {
            label: `循环绑定事件`,
            key: "8",
            children: <Function08 />,
          },
        ]}
      />
    </div>
  );
}
