/*
 * Author  hailie.pan
 * Date  2022-12-12 23:04:19
 * LastEditors  hailie.pan
 * LastEditTime  2023-06-12 18:08:50
 * Description  file content
 */
import React, { useEffect, useState } from "react";
import { Button } from "antd";
let monitorSound;
export default function Function08() {
  // useEffect(() => {
  //   const wrapDom = document.getElementById("btnwrap");
  //   const btns = wrapDom.getElementsByTagName("button");
  //   // es6 let语法 es6转es5也是用闭包的语法，性能问题
  //   for (let i = 0; i < btns.length; i++) {
  //     btns[i].onclick = function () {
  //       console.log(i);
  //     };
  //   }

  //   function fn(index) {
  //     return function () {
  //       console.log("我执行了", index);
  //     };
  //   }
  //   // 用闭包解决循环绑定事件问题
  //   for (var i = 0; i < btns.length; i++) {
  //     // btns[i].onclick = fn(i);
  //     btns[i].onclick = (function (index) {
  //       // 随着循环，每一次这个自执行函数都会执行掉
  //       // 这个被return 出去的函数才是事件处理函数呢
  //       return function () {
  //         console.log("我执行了", index);
  //       };
  //     })(i);
  //   }
  // }, []);

  // // 变量提升;
  // /*
  // es6 变量先定义再使用 不能在定义变量之前使用变量
  // */

  // const [test, setTest] = useState([]);
  // useEffect(() => {
  //   // console.log("test", test);
  // }, [test]);

  // useEffect(() => {
  //   fn();
  // }, []);

  // const fn = () => {
  //   setInterval(() => {
  //     // setTest([...test, 1]);
  //     setTest((test) => [...test, 1]);
  //   }, 1000);
  // };

  useEffect(() => {
    fn();
  }, []);

  const [robotStatus, setRobotStatus] = useState("active");
  const fn = () => {
    let maxTime = 10;
    monitorSound = setInterval(() => {
      maxTime--;
      if (maxTime > 0) {
        console.log("maxTime", maxTime);
      } else {
        console.log("maxTime", maxTime);
        setRobotStatus("sleep");

        clearInterval(monitorSound);
      }
    }, 1000);
  };

  return (
    <div id="btnwrap">
      {/* <div>{test[test.length - 1]}</div> */}
      <Button
        onClick={() => {
          clearInterval(monitorSound);
        }}
      >
        1
      </Button>
      <Button>2</Button>
      <Button>3</Button>
      <h2>{robotStatus}</h2>
    </div>
  );
}
