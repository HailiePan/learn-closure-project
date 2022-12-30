/*
 * Author  hailie.pan
 * Date  2022-12-11 23:15:49
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-12 22:23:14
 * Description  file content
 */

import React, { useEffect } from "react";

export default function Function02() {
  /*
  一个不会被销毁的函数执行空间
    函数的每一次执行会创造一个函数执行空间
    当函数内部返回一个 复杂数据类型 的时候， 并且函数外部还有变量在接收
    这个函数执行空间不会被销毁

    用处：
    延长了变量的生命周期


    全局作用域对应的栈内存；关闭页面的时候会被销毁；
    私有作用域的对应的栈内存；一般情况下，函数执行完成，对应的栈内存就会销毁，
    当返回值是一个引用数据类型时，不会被销毁；

  */

  function fn() {
    console.log("hello world");
    const obj = { a: 2 };
    // 函数内部返回一个复杂数据类型
    return obj;
  }

  // obj接收的fn函数执行空间内部的对象
  const obj = fn();
  // 随时访问obj随时能拿到
  console.log("obj", obj);
  console.log("obj", obj);

  // 创建了一个新的对象返回
  const obj2 = fn();

  // 这就是工厂模式
  return <div>一个不会被销毁的函数执行空间</div>;
}
