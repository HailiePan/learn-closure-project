/*
 * Author  hailie.pan
 * Date  2022-12-12 20:00:04
 * LastEditors  hailie.pan
 * LastEditTime  2023-06-20 14:09:06
 * Description  栈内存堆内存
 */
import { Button } from "antd";
import React from "react";

export default function Function05() {
  // 基本数据类型-栈内存
  let a1 = 0;
  // 基本数据类型-栈内存
  let a2 = "this is string";
  // 基本数据类型-栈内存
  let a3 = null;
  // 对象的指针存放在栈内存中，指针指向的对象存放在堆内存中
  let b1 = { m: 20 };
  // 数组的指针存放在栈内存中，指针指向的数组存放在堆内存中
  let c = [1, 2, 3];

  // 基本数据类型的复制
  let a = 20;
  let b2 = a;
  b2 = 30;
  console.log(a); // 20

  // 引用数据类型的复制
  let m = { a: 10, b: 20 };
  let n = m;
  n.a = 16;
  console.log(m.a); // 16

  let showSubtitleTimer;
  // 逐字展示 模板的回复
  const setAnswerSubtitle = (value) => {
    console.log("逐字展示 ", value);

    var text = value;
    var num = text?.length;
    const answerDom = document.getElementById("robotAnswerDom");
    var i = 0;
    if (!answerDom) {
      return;
    }
    if (!text) {
      answerDom.innerHTML = "";
      return;
    }
    showSubtitleTimer = setInterval(() => {
      var shower = text?.substr(0, i);
      answerDom.innerHTML = shower;
      i++;
      if (i > num) {
        clearInterval(showSubtitleTimer);
      }
    }, 150);
  };

  return (
    <div>
      一般来说，栈内存主要用于存储各种基本类型的变量，包括Boolean、Number、String、Undefined、Null…以及对象变量的指针
      <br />
      <p id="robotAnswerDom" />
      <Button
        onClick={() => {
          const text = "那是一个晴朗的下午，风很轻，云很淡";
          setAnswerSubtitle(text);
        }}
      >
        显示文字
      </Button>
      <Button
        onClick={() => {
          clearInterval(showSubtitleTimer);
        }}
      >
        停止显示
      </Button>
    </div>
  );
}
