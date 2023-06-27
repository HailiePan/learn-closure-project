/*
 * Author  hailie.pan
 * Date  2022-12-11 23:15:49
 * LastEditors  hailie.pan
 * LastEditTime  2023-06-02 13:35:46
 * Description  file content
 */

import React, { useEffect, useState, useRef } from "react";

import recordIconNormal from "./images/audio_icon_bg.png";
import recordIconActive from "./images/audio_icon_active_bg.png";
import radOne from "./images/rad1.png";
import radTwo from "./images/rad2.png";
import radThree from "./images/rad3.png";

import styles from "./function02.module.less";
export default function Function02() {
  const AudioWave = function (el, options) {
    let interval = null;
    const intervalDuration = 100;
    let data = null;
    let spanHeight = "6px";
    const maxHeight = 50;
    const config = {
      noOfWaves: 5,
      ...options,
    };

    const _render = (reset) => {
      data.forEach((waveData, index) => {
        const waveSpan = el.childNodes[index];
        if (waveSpan && waveSpan.style) {
          const newHeight = Number(maxHeight * waveData);
          if (reset) {
            waveSpan.style.height = spanHeight;
          } else {
            waveSpan.style.height =
              !newHeight || newHeight < 2 ? "2px" : `${newHeight}px`;
          }
        }
      });
    };

    const _init = () => {
      data = new Array(config.noOfWaves).fill(10);
      for (let i = 0; i < config.noOfWaves; i++) {
        const waveSpan = document.createElement("span");
        waveSpan.style.height = spanHeight;
        el.appendChild(waveSpan);
      }
    };
    const _reset = () => {
      _render(true);
    };
    const onIntervalChanged = () => {
      const partLength = Math.floor(config.noOfWaves / 2);
      const tempData = new Array(partLength + 1)
        .fill(0)
        .map(() => Math.random());
      data = [
        ...tempData,
        ...tempData.slice(0, Math.floor(config.noOfWaves / 2)).reverse(),
      ];
      _render();
    };

    const start = () => {
      interval = setInterval(onIntervalChanged, intervalDuration);
    };

    const stop = () => {
      clearInterval(interval);
      _reset();
    };

    _init();

    return {
      start,
      stop,
    };
  };

  function fn() {
    const obj = { a: 2 };
    // 函数内部返回一个复杂数据类型
    return obj;
  }

  // obj接收的fn函数执行空间内部的对象
  const obj = fn();
  // 随时访问obj随时能拿到

  // 创建了一个新的对象返回
  const obj2 = fn();

  // 这就是工厂模式

  const [subtitle, setSubtitle] = useState({}); // 字幕
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [robotStatus, setRobotStatus] = useState("sleep"); // 机器人状态,  sleep | wakeUp]
  const onRecording = false;
  const robotOngoingStatus = "";
  const leftWaveDomRef = useRef(null);
  const rightWaveDomRef = useRef(null);
  const leftWaveRef = useRef(null);
  const rightWaveRef = useRef(null);

  const startWave = () => {
    if (!leftWaveRef.current) {
      leftWaveRef.current = new AudioWave(leftWaveDomRef.current, {
        noOfWaves: 30,
      });
    }
    if (!rightWaveRef.current) {
      rightWaveRef.current = new AudioWave(rightWaveDomRef.current, {
        noOfWaves: 30,
      });
    }
    leftWaveRef.current.start();
    rightWaveRef.current.start();
  };
  const stopWave = () => {
    if (leftWaveRef.current) {
      leftWaveRef.current.stop();
    }
    if (rightWaveRef.current) {
      rightWaveRef.current.stop();
    }
  };

  useEffect(() => {
    startWave();
    stopWave();

    return () => {};
  }, []);

  return (
    <div style={{ padding: "0 20px" }}>
      <div className={styles.recordingWave}>
        <div className={styles.icon}>
          {!onRecording && (
            <img
              // 不在录音中时点击
              onClick={async () => {
                setLoadingVisible(false); // 等待答案的loading
              }}
              src={recordIconNormal}
            />
          )}
        </div>
        {/* 左右两边的跳动 */}
        <div className={styles.waveContainer}>
          <div ref={leftWaveDomRef} className={styles.wave} />
          <div ref={rightWaveDomRef} className={styles.wave} />
        </div>
      </div>

      {/* 一个不会被销毁的函数执行空间
      <br />
      函数的每一次执行会创造一个函数执行空间
      <br />
      当函数内部返回一个 复杂数据类型 的时候， 并且函数外部还有变量在接收
      <br />
      这个函数执行空间不会被销毁
      <br />
      <br />
      用处：
      <br />
      延长了变量的生命周期
      <br />
      <br />
      全局作用域对应的栈内存；关闭页面的时候会被销毁；
      <br />
      私有作用域的对应的栈内存；一般情况下，函数执行完成，对应的栈内存就会销毁，
      <br />
      当返回值是一个引用数据类型时，不会被销毁；
      <br /> */}
    </div>
  );
}
