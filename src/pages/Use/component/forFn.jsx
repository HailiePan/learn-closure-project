/*
 * Author  hailie.pan
 * Date  2023-02-28 17:21:27
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 21:23:20
 * Description  file content
 */
import React, { useEffect } from "react";

export default function ForFn() {
  //   用途1:解决for循环的问题
  const aBtn = document.getElementsByTagName("button");
  useEffect(() => {
    const fn = (i) => {
      return function () {
        console.log("i", i);
      };
    };

    for (var i = 0; i < aBtn.length; i++) {
      aBtn[i].onclick = fn(i);
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
