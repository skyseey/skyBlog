import React, { useEffect } from "react";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css"; // 这个nprogress样式必须引入

const style = {
  width: "100%",
  height: "100%",
  overHiden: "hidden",
};

export default function BeforeEach(props) {
  useEffect(() => {
    NProgress.done();
    return () => NProgress.start();
  });
  return <div style={{ ...style }}>{props.children}</div>;
}
