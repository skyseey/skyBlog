/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-08 14:24:29
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-08 16:53:29
 * @FilePath: \yellowsky-resume\src\pages\NotPage\NotServer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
export default function NotServer() {
  return (
    <div className="status-wrapper">
      <img src={require("@/assets/images/500.png")} alt="" />
      <p>服务异常</p>
      <NavLink to="/">
        <Button type="primary">回到首页</Button>
      </NavLink>
    </div>
  );
}
