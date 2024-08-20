import Sider from "@/pages/Components/Layout/Sider";
import Content from "@/pages/Components/Layout/Content";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPathRoutesFn } from "@/utils/index";
import { routes } from "@/router";

const pathName = "/blog/bj/1";
export default function Note() {
  // 当前左边菜单
  const [sideMenuValue, setSideMenuValue] = useState([]);
  const [currentSelectedKey, currentSelectedKeySet] = useState(pathName);
  const navigate = useNavigate();

  const siderClick = (item) => {
    navigate(item.key);
    currentSelectedKeySet(item.key);
  };
  const getMenu = () => {
    // console.log(getPathRoutesFn(routes).children, window.location.pathname);
    let menu = [];
    if (getPathRoutesFn(routes) && getPathRoutesFn(routes).children) {
      let array = getPathRoutesFn(routes).children;
      for (let index = 0; index < array.length; index++) {
        if (
          window.location.pathname.includes(array[index].path) &&
          array[index].children
        ) {
          menu = array[index].children.map((v) => {
            return {
              key: v.path,
              label: v.title,
              icon: v.icon,
            };
          });
          break;
        }
      }
    }
    navigate(pathName);
    setSideMenuValue(menu);
  };

  useEffect(getMenu, [navigate]);

  return (
    <>
      <Sider
        list={sideMenuValue}
        click={siderClick}
        currentSelectedKey={currentSelectedKey}
      />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}
