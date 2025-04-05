import { message } from "antd";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { worksList as worksAllList } from "./config";
const { Meta } = Card;
export default function Workes() {
  const navigate = useNavigate();
  const worksList = worksAllList;
  const handlerClick = (item) => {
    if (!item.url) return message.warning("暂无网址可以参观！");
    if (item.url.includes("http")) {
      window.open(item.url, "_blank");
    } else {
      navigate(item.url);
    }
  };

  return (
    <div className="works-all-style">
      {worksList.map((item, index) => {
        return (
          <Card
            key={index}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={item.img} />}
            onClick={() => {
              handlerClick(item);
            }}
          >
            <Meta title={item.title} description={item.desc} />
          </Card>
        );
      })}
    </div>
  );
}
