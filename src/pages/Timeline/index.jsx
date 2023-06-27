/*
 * Author  hailie.pan
 * Date  2023-05-24 14:32:11
 * LastEditors  hailie.pan
 * LastEditTime  2023-05-24 19:55:43
 * Description  file content
 */
import React, { useState, useEffect } from "react";
import styles from "./index.module.less";

export default function Timeline() {
  return (
    <div className={styles.timeLineWrap}>
      <h1>发展历程</h1>
      <div className={styles.contentWrap}>
        <div className={`${styles.timeBlock} ${styles.timeBlock1}`}>
          <h5>2019.12</h5>
          <div className={styles.circleWrap}>
            <div className={styles.outCircle}>
              <div className={styles.innerCircle} />
            </div>
            <div className={`${styles.line} ${styles.verticalLine1}`} />
          </div>

          <p>
            帮助上海某供电公司建设国内首个智慧变电站数字孪生平台，成为两网智慧变电站建设标杆
          </p>
        </div>

        <div className={`${styles.timeBlock} ${styles.timeBlock2}`}>
          <h5>2020.09</h5>
          <div className={styles.circleWrap}>
            <div className={styles.outCircle}>
              <div className={styles.innerCircle} />
            </div>
            <div className={`${styles.line} ${styles.verticalLine2}`} />
          </div>

          <p>ISOP（智慧变电站统一运维管理平台）V1.0发布</p>
        </div>

        <div className={`${styles.timeBlock} ${styles.timeBlock3}`}>
          <h5>2021.01</h5>
          <div className={styles.circleWrap}>
            <div className={styles.outCircle}>
              <div className={styles.innerCircle} />
            </div>
            <div className={`${styles.line} ${styles.verticalLine3}`} />
          </div>

          <p>智能电力事业部成立</p>
        </div>

        <div className={`${styles.timeBlock} ${styles.timeBlock4}`}>
          <h5>2021.06</h5>
          <div className={styles.circleWrap}>
            <div className={styles.outCircle}>
              <div className={styles.innerCircle} />
            </div>
            <div className={`${styles.line} ${styles.verticalLine4}`} />
          </div>
          <p>跨省客户签单，中标国网安徽电力科学研究院智慧变电站项目</p>
        </div>

        <div className={`${styles.timeBlock} ${styles.timeBlock5}`}>
          <h5>2021.11</h5>
          <div className={styles.circleWrap}>
            <div className={styles.outCircle}>
              <div className={styles.innerCircle} />
            </div>
          </div>
          <p>参与编制“2021年电力行业数字孪生白皮书”</p>
        </div>
      </div>
    </div>
  );
}
