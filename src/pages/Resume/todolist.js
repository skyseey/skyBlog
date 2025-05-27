/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-08 14:36:07
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-05-27 21:07:34
 * @FilePath: \yellowsky-blog\src\pages\Resume\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";

// moks
let resorceList = [];
for (let i = 0; i < 1000; i++) {
  resorceList.push(i);
}

const useTodo = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const add = (value) => {
    setValue("");
    setList([...list, value]);
  };
  const delFn = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  const editFn = (index) => {
    setCurrentIndex(index);
  };
  const agreen = (item, index) => {
    list[index] = item;
    setList([...list]);
  };
  return {
    value,
    setValue,
    currentIndex,
    list,
    setList,
    add,
    delFn,
    editFn,
    agreen,
  };
};

export default function Resume() {
  const { value, setValue, currentIndex, list, add, delFn, editFn, agreen } =
    useTodo();
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   let currentlist = resorceList.slice((page - 1) * 10, page * 10);
  //   setList(currentlist);
  // }, [page]);

  // // 分页函数
  // const pageFn = (value) => {
  //   setPage(value);
  // };
  return (
    <div className="content">
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button
        onClick={() => {
          add(value);
        }}
      >
        add
      </button>
      {list.map((item, index) => {
        return (
          <div style={{ display: "flex", gap: "10px" }} key={index}>
            {currentIndex === index ? (
              <div>
                <input
                  value={item}
                  onChange={(e) => {
                    agreen(e.target.value, index);
                  }}
                ></input>
                <button
                  onClick={() => {
                    editFn(null);
                  }}
                >
                  agreen
                </button>
              </div>
            ) : (
              item
            )}

            <button
              onClick={() => {
                delFn(index);
              }}
            >
              del
            </button>
            <button
              onClick={() => {
                editFn(index);
              }}
            >
              edit
            </button>
          </div>
        );
      })}

      {/* 分页 */}
      {/* <input value={page} onChange={(e) => pageFn(e.target.value)}></input> */}
    </div>
  );
}
