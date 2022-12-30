/*
 * Author  hailie.pan
 * Date  2022-12-12 20:00:04
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-12 20:02:49
 * Description  file content
 */
import React from "react";

export default function Function04() {
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

  return <div>闭包销毁</div>;
}
