/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-15 20:00:51
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-20 16:23:20
 * @FilePath: \yellowsky-blog\src\pages\Blog\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";

import { Outlet } from "react-router-dom";
import "./index.scss";
// 导入组件
import Header from "@/pages/Components/Layout/Header";
const Blog = () => {
  return (
    <div className="layoutStyle">
      <Header />
      <div className="contentMainStyle">
        <Outlet />
      </div>
    </div>
  );
};
export default Blog;
