/*
 * Author  hailie.pan
 * Date  2022-12-12 22:24:18
 * LastEditors  hailie.pan
 * LastEditTime  2023-06-07 18:07:29
 * Description  file content
 */
import React, { useRef, useEffect, useState } from "react";
import { testName, testPwd } from "@/utils/reg";
import styles from "./function07.module.less";

import audioDefaultIcon from "./images/audio_icon_default_middleground.png";
import recordIconActive from "./images/audio_icon_active_bg.png";
import middleRadOne from "./images/middle_rad1.png";
import middleRadTwo from "./images/middle_rad2.png";
import middleRadThree from "./images/middle_rad3.png";

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
    const tempData = new Array(partLength + 1).fill(0).map(() => Math.random());
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

export default function Function07() {
  /*
    函数柯里化
        一种函数的封装形式
        把一个函数的两个参数拆开成为两个函数，每一个函数一个参数
        多个参数的时候，把第一个参数单独提取出来
  */
  //  封装：使用正则去验证用户名
  function fn(reg, name) {
    return reg.test(name);
  }
  // 使用的时候
  const reg = /[^_]\w{5,11}/;
  const res = fn(reg, "guojing");
  console.log(res);
  //   // 就这么一点事为什么要封装函数？
  //   // 在模块开发的时候，每一个模块尽量不向外暴露变量，而是向外暴露函数，返回方法
  //   //   如果验证别的，每次都要传reg

  // 换一种方式来写
  // 以闭包的形式进行封装、
  function testName(reg) {
    return function (username) {
      return reg.test(username);
    };
  }
  //  将来我使用的时候
  // resfn接收的是 函数内部 返回的函数
  const resfn = testName(/[^_]\w{5,11}/);

  //   真正进行代码开发的时候;
  const res3 = resfn("guojing");
  console.log(res3);

  //  柯里化函数主要为了把参数拆开，主要做的事主要为模块化服务的
  // 模块化把功能独立出来
  // 准备一个js文件，里面是各种正则验证

  //   按需引入
  //   这就是模块化规则，柯里化函数可以把封装变得更简单，以后规则改了，只改规则，其他的都不动

  const leftWaveDomRef = useRef(null);
  const rightWaveDomRef = useRef(null);
  const leftWaveRef = useRef(null);
  const rightWaveRef = useRef(null);

  const startWave = () => {
    if (!leftWaveRef.current) {
      leftWaveRef.current = new AudioWave(leftWaveDomRef.current, {
        noOfWaves: 24,
      });
    }
    if (!rightWaveRef.current) {
      rightWaveRef.current = new AudioWave(rightWaveDomRef.current, {
        noOfWaves: 24,
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

  const [onRecording, setOnRecording] = useState(false);
  return (
    <div className={styles.wrap}>
      {/* 柯里化函数 */}

      <div className={styles.recordingWave}>
        <div className={styles.icon}>
          {!onRecording && (
            <img src={audioDefaultIcon} onClick={() => setOnRecording(true)} />
          )}
          {/* 录音中 */}
          {onRecording && (
            <div className={styles.onRecordingIcon}>
              <img
                style={{
                  top: "28px",
                  left: "16px",
                }}
                className={styles.radOne}
                src={middleRadOne}
              />
              <img
                style={{
                  top: "39px",
                  left: "23px",
                }}
                className={styles.radTwo}
                src={middleRadTwo}
              />
              <img
                style={{
                  top: "16px",
                  left: "13px",
                }}
                className={styles.radThree}
                src={middleRadThree}
              />
              <img
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
                src={recordIconActive}
                // 录音中点击
                onClick={() => setOnRecording(false)}
              />
            </div>
          )}
        </div>
        {/* 左右两边的跳动 */}
        <div className={styles.waveContainer}>
          <div ref={leftWaveDomRef} className={styles.wave} />
          <div ref={rightWaveDomRef} className={styles.wave} />
        </div>
      </div>
    </div>
  );
}
