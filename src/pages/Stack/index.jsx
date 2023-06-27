/*
 * Author  hailie.pan
 * Date  2022-12-11 22:36:41
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 21:27:23
 * Description  file content
 */
import React, { useEffect } from "react";
import styles from "./index.module.less";

export default function DemoByMDN() {
  function init() {
    var name1 = "MozillaByInit"; // name 是一个被 init 创建的局部变量
    function displayName() {
      // displayName() 是内部函数，一个闭包
      alert(name1); // 使用了父函数中声明的变量
    }
    displayName();
  }

  function makeFunc() {
    var name = "MozillaByMakeFunc";
    function displayName() {
      alert(name);
    }
    return displayName;
  }

  var myFunc = makeFunc();
  // myFunc();

  useEffect(() => {
    // init();
    // myFunc();
    setupHelp();
  }, []);

  function showHelp(help) {
    return function () {
      document.getElementById("help").innerHTML = help;
    };
  }

  function setupHelp() {
    var helpText = [
      { id: "email", help: "Your e-mail address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];

    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = showHelp(item.help);
    }
  }

  function makeSizer(size) {
    return function () {
      document.body.style.fontSize = size + "px";
    };
  }

  useEffect(() => {
    document.getElementById("size-12").onclick = makeSizer(12);
    document.getElementById("size-14").onclick = makeSizer(14);
    document.getElementById("size-16").onclick = makeSizer(16);
  }, []);

  return (
    <div>
      <p id="help">Helpful notes will appear here</p>
      <p>
        E-mail: <input type="text" id="email" name="email" />
      </p>
      <p>
        Name: <input type="text" id="name" name="name" />
      </p>
      <p>
        Age: <input type="text" id="age" name="age" />
      </p>
      <h1>云智慧</h1>
      <h2>云智慧</h2>
      <a href="#" id="size-12">
        12
      </a>
      <a href="#" id="size-14">
        14
      </a>
      <a href="#" id="size-16">
        16
      </a>
    </div>
  );
}
