/*
 * Author  hailie.pan
 * Date  2023-02-28 16:00:52
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 21:44:27
 * Description  file content
 */
import React from "react";
import { Button } from "antd";
export default function index() {
  // 写一个函数，每执行一次就累计减一

  // 全局变量;
  // var a = 10;
  // function fa() {
  //   a--;
  //   console.log("a", a);
  // }

  // 变量写在函数内部，每次调用完会销毁，b 永远都从前10开始,存不住
  // function fa() {
  //   var a = 10;
  //   a--;
  //   console.log(a);
  // }

  //   用闭包
  function fa() {
    var a = 10;
    function fb() {
      a--;
      console.log("a", a);
    }
    return fb;
  }

  var fn = fa();

  return (
    <div style={{ padding: "20px" }}>
      <Button
        style={{ marginBottom: "20px" }}
        onClick={() => {
          fn();
        }}
      >
        减1
      </Button>
      <div style={{ lineHeight: "30px" }}>
        <h3> 闭包的条件： </h3>
        <p> 1.有函数嵌套</p>
        <p>2.内部函数引用外部作用域的变量 </p>
        <p>3.返回值是函数</p>
        <p>4.创建一个对象函数，让其长期驻留 </p>
        <p> 闭包释放掉 fn = null</p>
        闭包的使用条件: 创建一个变量,长期保存变量，又不污染全局
      </div>
    </div>
  );
}
