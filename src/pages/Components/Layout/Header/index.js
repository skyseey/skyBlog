import "./index.scss";
import React from "react";
import Icon, { HomeTwoTone } from "@ant-design/icons";
import { Layout, Tabs, Tooltip } from "antd";
import { routes } from "@/router";
// 数据导入
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getPathRoutesFn } from "@/utils/index";
import { useEffect, useState } from "react";
const { Header: MyHeader } = Layout;

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

const MenuIcon = () => {
  const navigate = useNavigate();
  const itemList = [
    {
      title: "首页",
      path: "/",
      Icon: (
        <Icon
          component={HomeTwoTone}
          style={{
            fontSize: "18px",
          }}
        ></Icon>
      ),
    },
  ];
  return (
    <div className="iconStyle">
      {itemList.map((v, index) => (
        <Tooltip placement="top" title="在线预览简历" key={index}>
          <span
            className="tips"
            onClick={() => {
              v.path && navigate(v.path);
            }}
          >
            {v.Icon}
          </span>
        </Tooltip>
      ))}
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  // 当前左边菜单
  const [sideMenuValue, setSideMenuValue] = useState([]);
  const onChange = (key) => {
    key && navigate(key);
  };
  const getMenu = () => {
    console.log(getPathRoutesFn(routes).children);
    let menu = [];
    if (getPathRoutesFn(routes) && getPathRoutesFn(routes).children) {
      menu = getPathRoutesFn(routes).children.map((v) => {
        return {
          key: v.path,
          label: v.meta.title,
        };
      });
    }
    setSideMenuValue(menu);
  };
  useEffect(() => {
    getMenu();
  }, []);
  return (
    <MyHeader
      style={{
        display: "flex",
        alignItems: "center",
        background: "#fff",
        marginBottom: "10px",
      }}
      className="headerStyle"
    >
      <div className="main">
        <div className="logo">
          <PandaIcon
            style={{
              fontSize: "32px",
            }}
          />
          SkyBlog
        </div>
        <div className="right">
          <Tabs
            defaultActiveKey="bj"
            items={sideMenuValue}
            onChange={onChange}
          />
          <MenuIcon></MenuIcon>
        </div>
      </div>
    </MyHeader>
  );
};

export default Header;
