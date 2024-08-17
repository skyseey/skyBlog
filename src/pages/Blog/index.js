import React, { useState } from "react";
import { message } from "antd";
import "./index.scss";
// 导入组件
import Header from "@/pages/Components/Layout/Header";
import Sider from "@/pages/Components/Layout/Sider";
import Content from "@/pages/Components/Layout/Content";

// 数据导入
import { headerData } from "@/utils/data";
const Blog = () => {
  // 当前左边菜单
  const [sideMenuValue, setSideMenuValue] = useState(
    headerData.find((s) => s.key === "bj")
  );
  // 对应要展示的组件
  const [currentCp, setCurrentCp] = useState(null);
  const changeFn = (key) => {
    let result = headerData.find((s) => s.key === key);
    setSideMenuValue(result);
    if (!result.menu) return message.warning("敬请期待！");
  };
  const siderClick = (item) => {
    const result = findCp(sideMenuValue?.menu, item.key);
    console.log(result);

    setCurrentCp(result);
  };

  const findCp = (list, key) => {
    console.log(list, key);
    key = Number(key);
    for (let index = 0; index < list.length; index++) {
      const v = list[index];
      if (v.children && v.children.length > 0) {
        let res = findCp(v.children, key);
        return res;
      } else {
        if (v.key === key) {
          return v;
        }
      }
    }
    return null;
  };
  return (
    <div className="layoutStyle">
      <Header changeFn={changeFn} />
      <div className="contentMainStyle">
        <Sider list={sideMenuValue.menu || []} click={siderClick} />
        <Content>{currentCp ? currentCp.cp : null}</Content>
      </div>
    </div>
  );
};
export default Blog;
