/*
 * Author  hailie.pan
 * Date  2022-12-11 23:14:49
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 21:57:55
 * Description  file content
 */
import React from "react";

export default function Function01() {
  const fn = () => {
    console.log("fn");
  };

  return (
    <div style={{ padding: "0 20px" }}>
      闭包：
      <br />
      一个函数的高级应用
      <br />
      官方的定义：函数内部的函数
      <br />
      函数的两个步骤
      <br />
      1.函数的定义
      <br />
      1.1在堆里开辟一个空间
      <br />
      1.2把函数体内所有的代码当作字符串存储在这个空间中
      <br />
      1.3把空间地址赋值给栈里的变量(函数名)
      <br />
      2.函数调用
      <br />
      按照存储的地址找到函数存储的空间
      <br />
      在调用栈（不是栈内存）里再次开辟一个函数执行空间
      <br />
      在函数执行空间内进行 形参赋值
      <br />
      在函数执行空间内进行 与解析
      <br />
      把函数存储空间里的代码复制一份拿到函数执行空间 里面执行
      <br />
      代码全部执行完毕，这个新开辟的函数执行空间销毁
      <br />
      <br />
      所以当函数调用过多，会报内存不够.
      <br />
      <br />
      定义在函数内部的变量，
      <br />
      会随着函数执行完毕，函数执行空间的销毁而销毁掉。
      <br />
    </div>
  );
}
