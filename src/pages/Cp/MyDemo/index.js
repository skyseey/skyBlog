/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-20 20:47:20
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-04-05 22:19:38
 * @FilePath: \yellowsky-blog\src\pages\Cp\MyDemo\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Card, Button, Drawer, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useState, Suspense } from "react";
import "./index.scss";
import { demosList } from "./config";
// import DevelopingShow from "@/pages/Components/DevelopingShow.js";

const DrawerCp = ({
  title = "Demo",
  open = false,
  onClose = () => {},
  Details,
}) => {
  const DynamicComponent = React.lazy(Details.component);
  return (
    <Drawer width="100%" title={title} onClose={onClose} open={open}>
      <div className="demo-content-style">
        <Suspense
          fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />}
        >
          <DynamicComponent />
        </Suspense>
      </div>
    </Drawer>
  );
};

export default function Workes() {
  const [open, setOpen] = useState(false);
  const [Details, setDetails] = useState({ title: "Demo" });
  const handlerClick = (item) => {
    if (typeof item.component === "function") {
      setDetails({
        title: item.title,
        component: item.component,
      });
      setOpen(true);
      return;
    }
    if (!item.url) return message.warning("暂无网址可以参观！");
    if (item.url.includes("http")) {
      window.open(item.url, "_blank");
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    // <DevelopingShow />
    <div className="demos-all-style">
      {demosList.map((item, index) => {
        return (
          <Card
            key={index}
            hoverable
            title={item.title}
            variant="borderless"
            type="inner"
            style={{ width: "100%" }}
            extra={
              <Button
                color="primary"
                type="link"
                onClick={() => {
                  handlerClick(item);
                }}
              >
                More
              </Button>
            }
          >
            {item.content && item.content.length > 0 ? (
              item.content.map((res) => {
                return <p key={res}>{res}</p>;
              })
            ) : (
              <p>暂无内容</p>
            )}
          </Card>
        );
      })}
      <DrawerCp
        open={open}
        onClose={onClose}
        title={Details.title}
        Details={Details}
      />
    </div>
  );
}
