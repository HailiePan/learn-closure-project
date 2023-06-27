/*
 * Author  hailie.pan
 * Date  2022-12-11 23:16:33
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-03 16:51:10
 * Description  闭包
 */
import React from "react";

export default function Function03() {
  function fn() {
    var num = 100;
    return function a() {
      // 访问外部函数fn的私有变量 num
      // 并且把num的值返回
      return num;
    };
  }
  // 此时 res 接受的是 fn函数内部的a 函数
  // 我们管res或者a 叫做fn的闭包函数
  const res = fn();
  // 拿到函数的私有变量 num
  console.log(res());

  return (
    <div style={{ padding: "0 20px" }}>
      闭包
      <br />
      形成闭包的条件
      <br />
      一个不会被销毁的函数执行空间
      <br />
      函数内部 直接 或者 间接 的返回一个函数
      <br />
      内部函数操作（访问、赋值）着外部函数的变量
      <br />
      <br />
      当三个条件都满足的时候
      <br />
      我们管内部的函数叫做外部函数的 闭包函数
      <br />
      <br />
      闭包的作用：
      <br />
      保护变量私有化
      <br />
      定义在函数内部的变量就是私有化
      <br />
      在函数外部访问函数内部的私有变量
      <br />
      利用闭包函数访问 <br />
      <br />
      闭包的特点： 1.保护变量私有化
      <br />
      优点：不去污染全局
      <br />
      缺点：外部不能访问，需要闭包函数
      <br />
      2.可以在函数外部访问函数内部的变量
      <br />
      优点：不局限于私有变量
      <br />
      缺点：外部访问需要闭包函数
      <br />
      3.变量的生命周期
      <br />
      优点：变量的生命周期被延长了
      <br />
      缺点：一个不会被销毁的函数空间
      <br />
      致命的缺点：一个不会被销毁的函数空间
      <br />
      内存占用太多，浏览器就崩了，内存溢出，内存泄漏，
      <br />
      闭包慎用
      <br />
    </div>
  );
}
