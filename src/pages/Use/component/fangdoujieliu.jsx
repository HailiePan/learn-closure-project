/*
 * Author  hailie.pan
 * Date  2023-02-28 17:36:13
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-03 17:35:27
 * Description  file content
 */
import React, { useEffect } from "react";

export default function Fangdoujieliu() {
  function inputFn(e) {
    console.log("请求接口", e.target.value);
  }

  // 防抖 input输入
  function debounce(fn) {
    let timer = null;
    return function (e) {
      if (timer) {
        clearTimeout(timer); //触发了相同事件，取消当前计时，重新开始计时
      }
      timer = setTimeout(() => fn && fn(e), 1000);
    };
  }
  // 限制函数的执行频率，在期限时间内即使触发大量事件时，也只执行一次事件处理函数。
  useEffect(() => {
    // 输入完之后请求一次 debounce(inputFn);
    document.getElementById("inputId").oninput = debounce(inputFn);
  }, []);

  // 节流 onscroll滚动
  function throttle(delay) {
    let flag = true; //默认执行完毕了
    return function () {
      if (!flag) {
        //false时return，上次没有执行完，没有必要再执行
        return;
      }
      flag = false; //改为没有执行
      setTimeout(() => {
        console.log("请求接口");
        flag = true; //执行完之后再改为true
      }, delay);
    };
  }
  const onscroll = throttle(1000);
  //   多长的时间去调一次业务函数，不要频繁的去调用，有固定的频率去调用，

  // 区别：
  // 防抖必须等最后一次触发事件后才能执行事件函数，而节流是规定时间内必定会执行一次且只执行一次事件函数。
  return (
    <div style={{ padding: "0 20px" }}>
      <p>节流是规定时间内必定会执行一次且只执行一次事件函数;</p>
      <p>防抖必须等最后一次触发事件后才能执行事件函数.</p>

      <div style={{ display: "flex", marginTop: "20px" }}>
        <input
          type="text"
          id="inputId"
          style={{
            width: "200px",
            height: "30px",
            marginRight: "20px",
          }}
        />

        <div
          style={{
            width: "200px",
            height: "300px",
            border: "1px solid #eee",
            overflow: "scroll",
          }}
          onScroll={() => onscroll()}
        >
          <div
            style={{
              width: "100px",
              height: "1000px",
              background: "red",
              overflow: "scroll",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
