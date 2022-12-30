/*
 * Author  hailie.pan
 * Date  2022-12-12 23:04:19
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-28 15:15:30
 * Description  file content
 */
import React, { useEffect } from "react";

export default function Function08() {
  useEffect(() => {
    const wrapDom = document.getElementById("btnwrap");
    const btns = wrapDom.getElementsByTagName("button");
    // es6 let语法 es6转es5也是用闭包的语法，性能问题
    for (let i = 0; i < btns.length; i++) {
      btns[i].onclick = function () {
        console.log(i);
      };
    }

    function fn(index) {
      return function () {
        console.log("我执行了", index);
      };
    }
    // 用闭包解决循环绑定事件问题
    for (var i = 0; i < btns.length; i++) {
      // btns[i].onclick = fn(i);
      btns[i].onclick = (function (index) {
        // 随着循环，每一次这个自执行函数都会执行掉
        // 这个被return 出去的函数才是事件处理函数呢
        return function () {
          console.log("我执行了", index);
        };
      })(i);
    }
  }, []);

  return (
    <div id="btnwrap">
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  );
}
