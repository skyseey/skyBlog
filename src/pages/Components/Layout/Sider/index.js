import "./index.scss";
import React from "react";
import { Menu } from "antd";
const Sider = ({ list = [], click, currentSelectedKey }) => {
  return (
    <div className="siderStyle">
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[currentSelectedKey]}
        selectedKeys={[currentSelectedKey]}
        onClick={click}
        items={list}
      />
    </div>
  );
};

export default Sider;
