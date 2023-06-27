/*
 * Author  hailie.pan
 * Date  2022-12-12 22:23:57
 * LastEditors  hailie.pan
 * LastEditTime  2023-06-05 15:33:56
 * Description  file content
 */
import React, { useState } from "react";
import { Input } from "antd";
export default function Function06() {
  const [subtitle, setSubtitle] = useState("");
  const [inputValue, setInputValue] = useState("");

  const showSubtitle = (value) => {
    var text = value;
    var num = text.length;
    var i = 0;
    var done = setInterval(() => {
      var shower = text.substr(0, i);
      setSubtitle(shower);
      i++;
      if (i > num) {
        clearInterval(done);
      }
    }, 200);
  };
  console.log("subtitle", subtitle);
  return (
    <div>
      {/* 作用域 */}
      <Input
        allowClear
        style={{ width: "300px", height: "40px" }}
        value={inputValue}
        onPressEnter={(e) => showSubtitle(e.target.value)}
        onChange={(e) => {
          setInputValue(e.target.value);
          setSubtitle("");
        }}
      />
      <div style={{ width: "200px", height: "200px", border: "1px solid red" }}>
        {subtitle}
      </div>
    </div>
  );
}
