import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
export default function NotAuth() {
  return (
    <div className="status-wrapper">
      <img src={require("@/assets/images/403.png")} alt="" />
      <p>没有权限</p>
      <NavLink to="/">
        <Button type="primary">回到首页</Button>
      </NavLink>
    </div>
  );
}
