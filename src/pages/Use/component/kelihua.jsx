/*
 * Author  hailie.pan
 * Date  2023-02-28 17:21:40
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 21:49:44
 * Description  file content
 */
import React from "react";

export default function Kelihua() {
  /*
    函数柯里化
        一种函数的封装形式
        把一个函数的两个参数拆开成为两个函数，每一个函数一个参数
        多个参数的时候，把第一个参数单独提取出来
  */
  // 4到16位（字母，数字，下划线，减号）
  const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
  function checkName(reg) {
    return function (name) {
      return reg.test(name);
    };
  }
  const testfn = checkName(uPattern);

  const res1 = testfn("guojing");
  const res2 = testfn("huangrong");

  return (
    <div style={{ padding: "0 20px" }}>
      <p>一种函数的封装形式</p>
      <p> 把一个函数的两个参数拆开成为两个函数，每一个函数一个参数</p>
      <p> 多个参数的时候，把第一个参数单独提取出来</p>
    </div>
  );
}
