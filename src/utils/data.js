import React from "react";
import { UserOutlined } from "@ant-design/icons";
// 用到的子组件
import GitNode from "@/pages/Cp/Note/gitNode/index.js";
import LinuxPage from "@/pages/Cp/Note/linuxPage/index.js";
export const headerData = [
  {
    key: "bj",
    label: "笔记",
    // 左边菜单栏
    menu: [
      {
        key: 0,
        label: "Yellow Sky",
        type: "group",
        children: [
          {
            key: 1,
            icon: React.createElement(UserOutlined),
            label: "git笔记",
            cp: <GitNode />,
          },
          {
            key: 2,
            icon: React.createElement(UserOutlined),
            label: "linux指令",
            cp: <LinuxPage />,
          },
        ],
      },
    ],
  },
  {
    key: "zp",
    label: "作品",
  },
  {
    key: "demo",
    label: "MyDemo",
  },
];
