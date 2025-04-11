/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2025-04-05 21:54:21
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-04-11 15:51:13
 * @FilePath: \yellowsky-blog\src\pages\Cp\MyDemo\components\TodoAnimation\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Style from "./index.module.scss";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input, Alert, Space, message } from "antd";
import { useTransition, animated } from "@react-spring/web";

const { Search } = Input;

const TodoAnimation = () => {
  const [todoList, setTodoList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const transitions = useTransition(todoList, {
    keys: (todo) => todo.id,
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 220, friction: 20 },
  });
  const onSearch = (value, _e, info) => {
    if (info?.source && info?.source === "clear") return;
    if (!searchValue) return message.warning("input is empty");
    setTodoList([
      ...todoList,
      {
        value,
        id: Date.now(),
      },
    ]);
    setSearchValue("");
  };
  const onClose = (value) => {
    setTodoList(todoList.filter((item) => item.id !== value.id));
  };
  return (
    <div className={Style.TodoAnimationStyle}>
      <Search
        size="large"
        placeholder="input todo"
        allowClear
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        prefix={<UserOutlined />}
        onSearch={onSearch}
        enterButton="Add"
      />
      <div className={Style.listStyleAll}>
        <Space direction="vertical" style={{ width: "100%" }}>
          {transitions((style, item) => {
            return (
              <animated.div style={style}>
                <Alert
                  message={item.value}
                  type="success"
                  closable
                  onClose={() => {
                    onClose(item);
                  }}
                />
              </animated.div>
            );
          })}
        </Space>
      </div>
    </div>
  );
};
export default TodoAnimation;
