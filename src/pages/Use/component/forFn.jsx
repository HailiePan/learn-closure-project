/*
 * Author  hailie.pan
 * Date  2023-02-28 17:21:27
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-03 17:44:24
 * Description  file content
 */
import React, { useEffect } from "react";

export default function ForFn() {
  //   用途1:解决for循环的问题
  const aBtn = document.getElementsByTagName("button");

  console.log("aBtn", aBtn);
  useEffect(() => {
    const fn = (i) => {
      return function () {
        console.log(`点击第${i}个按钮`);
      };
    };

    for (var i = 0; i < aBtn.length; i++) {
      // aBtn[i].onclick = (function (j) {
      //   return function () {
      //     console.log(`点击第${j}个按钮`);
      //   };
      // })(i);
      aBtn[i].onclick = (function (j) {
        return function () {
          console.log(j);
        };
      })(i);
    }
  }, []);

  //   2.for循环中使用setTimeout
  for (var i = 0; i < 5; i++) {
    // (function (j) {
    //     setTimeout(() => {
    //       console.log("j", j);
    //     }, j * 1000);
    //   })(i);
    function fn(j) {
      setTimeout(() => {
        console.log("j", j);
      }, j * 1000);
    }
    fn(i);
  }
  return (
    <div>
      <button style={{ width: "50px" }}>0</button>
      <button style={{ width: "50px" }}>1</button>
      <button style={{ width: "50px" }}>2</button>
      <button style={{ width: "50px" }}>3</button>
      <button style={{ width: "50px" }}>4</button>
    </div>
  );
}
