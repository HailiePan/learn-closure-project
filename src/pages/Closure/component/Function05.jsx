/*
 * Author  hailie.pan
 * Date  2022-12-12 20:06:39
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-12 20:07:53
 * Description  file content
 */
/*
 * Author  hailie.pan
 * Date  2022-12-12 20:00:04
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-12 20:02:49
 * Description  file content
 */
import React from "react";

export default function Function05() {
  // 闭包的应用——沙箱模式

  // 使用：利用闭包

  function fn() {
    var num = 100;
    return function () {
      return num;
    };
  }
  // res是fn的闭包函数
  let res = fn();

  // res存储的不再是fn函数内部返回的函数了
  // fn的执行空间被销毁了
  res = 50;

  return <div>闭包的应用</div>;
}
