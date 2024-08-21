// 提供插入md文档模板标签
import ReactMarkdown from "react-markdown";
// 支持gfm语法 简单理解就是平时书写md文档的语法
import remarkGfm from "remark-gfm";
// md文档所需要的样式，例如表格的线条等等
import "github-markdown-css";
import rehypeRaw from "rehype-raw";
import rehypeRewrite from "rehype-rewrite";
import remarkUnwrapImages from "remark-unwrap-images";

import { useEffect, useState } from "react";
import { message } from "antd";
// const input = "# This is a header\n\nAnd this is a paragraph";
const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // 处理文件内容
        resolve(data);
      })
      .catch((error) => {
        // 处理错误
        reject(error);
      });
  });
};

const myRewrite = (node, index, parent) => {
  if (node.tagName === "img") {
    const imgSrc = node.properties.src.replace(/^\.\/|^\//, "");
    let img = require(`@/assets/MDDocument/img/${imgSrc}`);
    node.properties.src = img;
  }
};
const SPELDocument = ({ md }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (!md) {
      message.info("md 文件路径为空！");
    }
    getData(md).then((data) => {
      setValue(data);
    });
  });
  return (
    <article className="markdown-body">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, [rehypeRewrite, { rewrite: myRewrite }]]}
        remarkPlugins={[
          [remarkGfm, remarkUnwrapImages, { singleTilde: false }],
        ]}
        children={value}
      ></ReactMarkdown>
    </article>
  );
};

export default SPELDocument;
