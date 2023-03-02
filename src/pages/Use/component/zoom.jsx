/*
 * Author  hailie.pan
 * Date  2023-03-01 15:44:18
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 17:38:27
 * Description  案例
 */
import React, { useEffect } from "react";
import styles from "./zoom.module.less";

export default function Zoom() {
  useEffect(() => {
    init();
    leftZoom();
    bottomZoom();
  }, []);

  let width, height, maxWidth, maxHeight, startX, startY;
  // 初始化
  function init() {
    let container = document.getElementById("box");
    // 获取父元素宽高
    maxWidth = container.clientWidth;
    maxHeight = container.clientHeight;
  }
  function getInfo(e) {
    let dragEl = document.getElementById("drag");
    // 获取元素当前的宽高
    width = dragEl.clientWidth;
    height = dragEl.clientHeight;

    // 记录鼠标的起始位置
    startX = e.clientX;
    startY = e.clientY;
  }

  // 节流
  function throttle(fn) {
    let flag = true;
    return function (e) {
      if (!flag) {
        return;
      }
      flag = false;
      setTimeout(() => {
        fn && fn(e);
        flag = true;
      }, 10);
    };
  }

  function leftZoomMouseMove(e) {
    console.log("e");
    let dragEl = document.getElementById("drag");
    // 注意这里是➖
    let newWidth = Math.min(maxWidth, width - (e.clientX - startX));
    const newHeight = Math.min(maxHeight, (newWidth * 3) / 4);
    newWidth = (newHeight * 4) / 3;

    dragEl.style.width = `${newWidth}px`;
    dragEl.style.height = `${newHeight}px`;
  }

  function bottomZoomMouseMove(e) {
    let dragEl = document.getElementById("drag");
    // 注意这里是➖
    const newHeight = Math.min(maxHeight, height - (startY - e.clientY));
    const newWidth = (newHeight * 4) / 3;

    dragEl.style.width = `${newWidth}px`;
    dragEl.style.height = `${newHeight}px`;
  }

  function leftZoom() {
    let left = document.getElementById("left");
    left.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      getInfo(e);

      document.onmousemove = throttle(leftZoomMouseMove);
      document.onmouseup = () => {
        document.onmousemove = null;
      };
    });
  }

  function bottomZoom() {
    let bottom = document.getElementById("bottom");
    bottom.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      getInfo(e);

      document.onmousemove = throttle(bottomZoomMouseMove);
      document.onmouseup = () => {
        document.onmousemove = null;
      };
    });
  }

  return (
    <div className={styles.box} id="box">
      <div className={styles.drag} id="drag">
        <div className={styles.left} id="left"></div>
        <div className={styles.bottom} id="bottom"></div>
      </div>
    </div>
  );
}
