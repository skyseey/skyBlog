import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function Developing() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <Result
        title="正在开发中🔨🔨🔨"
        extra={
          <Button type="primary" onClick={() => { 
            navigate("/resume");
          }}>
            返回首页
          </Button>
        }
      />
    </div>
  );
}
