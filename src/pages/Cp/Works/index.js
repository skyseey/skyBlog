import { message } from "antd";
import { useEffect } from "react";
export default function Workes() {
  useEffect(() => {
    message.warning("敬请期待！");
  }, []);
  return <>works</>;
}
