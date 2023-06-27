/*
 * Author  hailie.pan
 * Date  2022-12-12 20:00:04
 * LastEditors  hailie.pan
 * LastEditTime  2023-06-17 11:21:45
 * Description  闭包销毁
 */
import React, { useEffect } from "react";
import notSupportedAudio from "./images/notSupportedAudio.js";
const base64ToBlob = (base64, fileType) => {
  let typeHeader = "data:application/" + fileType + ";base64,"; // 定义base64 头部文件类型
  let audioSrc = typeHeader + base64; // 拼接最终的base64
  let arr = audioSrc.split(",");
  let array = arr[0].match(/:(.*?);/);
  let mime = (array && array.length > 1 ? array[1] : type) || type;
  // 去掉url的头，并转化为byte
  let bytes = window.atob(arr[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  let ab = new ArrayBuffer(bytes.length);
  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime,
  });
};
export default function Function04() {
  function fn() {
    var num = 100;
    return function () {
      return num;
    };
  }
  // res是fn的闭包函数
  let res = fn();

  // res存储的不再是fn函数内部返回的函数了
  // fn的执行空间被销毁了
  res = 50;

  // 问答
  const qaFn = () => {
    const qaAudiodiv = document.getElementById("qaAudioRef"); //问答的audio
    let audioBlob = base64ToBlob(notSupportedAudio, "wav"); // 语音文件
    qaAudiodiv.src = window.URL.createObjectURL(audioBlob);

    qaAudiodiv.play();
    qaAudiodiv.currentTime = 1000;
    console.log(" qaAudiodiv.currentTime", qaAudiodiv.currentTime);
    // qaAudiodiv.duration; //获取总播放时间
    // qaAudiodiv.currentTime; //获取播放进度
  };

  // 主动播报
  const activeFn = () => {
    const qaAudiodiv = document.getElementById("qaAudioRef"); //问答的audio

    const activeAudioDiv = document.getElementById("activeAudioRef"); //主动播报的audio
    let audioBlob = base64ToBlob(notSupportedAudio, "wav"); // 语音文件

    console.log("qaAudiodiv.paused", qaAudiodiv.paused);
    if (qaAudiodiv.paused) {
      activeAudioDiv.src = window.URL.createObjectURL(audioBlob);
      console.log("问答暂停中");
      activeAudioDiv.play();
    } else {
      activeAudioDiv.src = window.URL.createObjectURL(audioBlob);
      console.log("问答播放中");
      qaAudiodiv.addEventListener("ended", () => {
        activeAudioDiv.play();
      });
    }
  };

  const updata = () => {
    const qaAudiodiv = document.getElementById("qaAudioRef");
    console.log("99", qaAudiodiv.duration, qaAudiodiv.currentTime); //控制台显示
  };
  return (
    <div>
      <audio id="qaAudioRef" controls preload />
      <audio id="activeAudioRef" />
      <div
        id="test-btn"
        onClick={() => {
          qaFn();
        }}
        style={{ width: "100px", height: "50px", background: "#ccc" }}
      >
        问答
      </div>
      <div
        onClick={() => activeFn()}
        style={{ width: "100px", height: "50px", background: "#999" }}
      >
        主动播报
      </div>

      {/* 存储的不再是fn函数内部返回的函数了 <br />
      fn的执行空间被销毁了 */}
      <br />
    </div>
  );
}
