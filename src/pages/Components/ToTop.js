import { UpCircleTwoTone } from "@ant-design/icons";
import { FloatButton } from "antd";
export default function ToTop() {
  const toTopFn = () => {
    let obj = window.document.querySelector(".layoutStyle");
    obj &&
      obj.scrollTo({
        top: 0,
        behavior: "smooth", // 可选，平滑滚动
      });
  };
  return (
    <FloatButton
      shape="circle"
      onClick={() => {
        toTopFn();
      }}
      style={{
        insetInlineEnd: 24,
      }}
      // icon={<ArrowUpOutlined />}
      icon={<UpCircleTwoTone />}
    />
  );
}
