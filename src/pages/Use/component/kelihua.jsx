/*
 * Author  hailie.pan
 * Date  2023-02-28 17:21:40
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-03 16:39:55
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
  // 如果验证别的，不必每次都要传reg
  return (
    <div style={{ padding: "0 20px" }}>
      <p>一种函数的封装形式</p>
      <p> 把一个函数的两个参数拆开成为两个函数，每一个函数一个参数</p>
      <p> 多个参数的时候，把第一个参数单独提取出来</p>
      <p>
        柯里化函数主要为了把参数拆开，主要做的事主要为模块化服务的
        <br />
        在模块开发的时候，每一个模块尽量不向外暴露变量，而是向外暴露函数，返回方法
        <br />
        把功能独立出来,按需引入
        <br />
        这就是模块化规则，柯里化函数可以把封装变得更简单，以后规则改了，只改规则，其他的都不动
        <br />
      </p>
    </div>
  );
}
