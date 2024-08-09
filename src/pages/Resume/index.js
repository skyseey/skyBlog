import React, { useEffect, createRef, useCallback } from "react";
import "./index.scss";
import { message } from "antd";
import Icon, { WechatOutlined, GithubOutlined } from "@ant-design/icons";
import { toPathFn, copyTextFn } from "@/utils/index.js";
const Left = () => {
  const peopleRef = createRef(null);
  const sphereRef = createRef(null);

  const init = useCallback(() => {
    peopleRef.current.addEventListener("animationend", function () {
      this.classList.remove("p-animtion");
      this.classList.add("p-other-animtion");
    });
    sphereRef.current.addEventListener("animationend", function () {
      this.classList.remove("s-animtion");
      this.classList.add("s-other-animtion");
    });
  }, [peopleRef, sphereRef]);

  useEffect(() => {
    // 初始化方法
    init();
  }, [init]);

  return (
    <div className="left">
      <img
        src={require("@/assets/images/Resume/img2.png")}
        className="people p-animtion"
        ref={peopleRef}
        alt="people"
      ></img>
      <img
        src={require("@/assets/images/Resume/img1.png")}
        className="sphere s-animtion"
        ref={sphereRef}
        alt="sphere"
      ></img>
    </div>
  );
};

const Right = () => {
  const menuList = [{ name: "博客" }, { name: "仓库" }];
  const copeFn = () => {
    copyTextFn("Y-SKY88").then((res) => {
      message.info("复制成功!");
    });
  };
  return (
    <div className="right">
      <div className="top">
        {menuList.map((res) => (
          <div className="top-item" key={res.name}>
            <span className="top-text">{res.name}</span>
          </div>
        ))}
      </div>
      <div className="form-wrappepr">
        <h1>
          世上没有失败,
          <p>只是暂时停止成功</p>
        </h1>
        <span className="tips">
          <PandaIcon
            style={{
              fontSize: "32px",
            }}
          />
        </span>
        <button
          onClick={() => {
            exportResume();
          }}
        >
          下载简历
        </button>
        <div className="other-login">
          <div className="divider">
            <span className="line"></span>
            <span className="divider-text">加油💪- Day Day Up 🚀🚀🚀</span>
            <span className="line"></span>
          </div>
          <div className="other-login-wrapper">
            <div
              className="other-login-item"
              onClick={() => {
                copeFn();
              }}
            >
              <WechatOutlined />
            </div>
            <div
              className="other-login-item"
              onClick={() => {
                toPathFn("https://github.com/skyseey");
              }}
            >
              <GithubOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <title>Panda icon</title>
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
  </svg>
);
const PandaIcon = (props) => <Icon component={PandaSvg} {...props} />;

// 导出本地简历
const exportResume = () => {
  // 使用相对路径
  const fileUrl = "/黄天2024.pdf";

  // 创建一个隐藏的a标签
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "黄天2024.pdf"; // 设置下载文件名

  // 将a标签添加到DOM并触发点击事件
  document.body.appendChild(link);
  link.click();

  // 移除a标签
  document.body.removeChild(link);
};

export default function Resume() {
  return (
    <div className="content">
      <Left></Left>
      <Right></Right>
    </div>
  );
}
