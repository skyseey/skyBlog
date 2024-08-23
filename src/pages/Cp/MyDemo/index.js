import { message } from "antd";
import { useEffect } from "react";
import DevelopingShow from "@/pages/Components/DevelopingShow.js";
export default function MyDemo() {
  useEffect(() => {
    message.warning("敬请期待！");
  }, []);
  return (
    <>
      <DevelopingShow />
    </>
  );
}
