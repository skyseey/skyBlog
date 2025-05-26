/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-08 14:36:07
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-05-24 16:43:16
 * @FilePath: \yellowsky-blog\src\pages\Resume\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";

// moks
let resorceList = [];
for (let i = 0; i < 1000; i++) {
  resorceList.push(i);
}

export default function Resume() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(resorceList);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let currentlist = resorceList.slice((page - 1) * 10, page * 10);
    setList(currentlist);
  }, [page]);

  const add = () => {
    setList([...list, value]);
  };
  const delFn = (item, index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  const editFn = (item, index) => {
    setCurrentIndex(index);
  };
  const agreen = (item, index) => {
    list[index] = item;
    setList([...list]);
  };

  // 分页函数
  const pageFn = (value) => {
    setPage(value);
  };
  return (
    <div className="content">
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button
        onClick={() => {
          add();
        }}
      >
        add
      </button>
      {list.map((item, index) => {
        return (
          <div key={index}>
            {currentIndex == index ? (
              <div>
                <input
                  value={item}
                  onChange={(e) => {
                    agreen(e.target.value, index);
                  }}
                ></input>
                <button
                  onClick={() => {
                    setCurrentIndex(null);
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
                delFn(item, index);
              }}
            >
              del
            </button>
            <button
              onClick={() => {
                editFn(item, index);
              }}
            >
              edit
            </button>
          </div>
        );
      })}

      {/* 分页 */}
      <input value={page} onChange={(e) => pageFn(e.target.value)}></input>
    </div>
  );
}
