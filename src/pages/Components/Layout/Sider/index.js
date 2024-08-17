import "./index.scss";
import React from "react";
import { Menu } from "antd";
const Sider = ({ list = [], click }) => {
  return (
    <div className="siderStyle">
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={click}
        items={list}
      />
    </div>
  );
};

export default Sider;
