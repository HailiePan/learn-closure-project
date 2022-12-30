/*
 * Author  hailie.pan
 * Date  2022-12-12 22:24:18
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-12 23:36:42
 * Description  file content
 */
import React from "react";
import { testName, testPwd } from "@/utils/reg";
export default function Function07() {
  /*
    函数柯里化
        一种函数的封装形式
        把一个函数的两个参数拆开成为两个函数，每一个函数一个参数
        多个参数的时候，把第一个参数单独提取出来
  */
  //  封装：使用正则去验证用户名
  //   function fn(reg, name) {
  //     return reg.test(name);
  //   }
  // 使用的时候
  //   const reg = /[^_]\w{5,11}/;
  //   const res = fn(reg, "guojing");
  //   console.log(res);
  //   // 就这么一点事为什么要封装函数？
  //   // 在模块开发的时候，每一个模块尽量不向外暴露变量，而是向外暴露函数，返回方法
  //   //   如果验证别的，每次都要传res
  //   const res2 = fn(reg, "huangrong");

  // 换一种方式来写
  // 以闭包的形式进行封装、
  //   function testName(reg) {
  //     return function (username) {
  //       return reg.test(username);
  //     };
  //   }
  //  将来我使用的时候
  // res接收的是 函数内部 返回的函数
  //   const res = testName(/[^_]\w{5,11}/);

  //   真正进行代码开发的时候;
  //   const res2 = res("guojing");
  //   console.log(res2);

  //  科利华函数主要为了把参数拆开，主要做的事主要为模块化服务的
  // 模块化把功能独立出来
  // 准备一个js文件，里面是各种正则验证

  const res3 = testName("guojing");
  console.log(res3);

  //   按需引入
  //   这就是模块化规则，柯里化函数可以把封装变得更简单，以后规则改了，只改规则，其他的都不动

  return <div>柯里化函数</div>;
}
