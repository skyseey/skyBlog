/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-17 22:29:35
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-20 21:21:29
 * @FilePath: \yellowsky-blog\src\pages\Components\ViewMd\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 提供插入md文档模板标签
import ReactMarkdown from "react-markdown";
// 支持gfm语法 简单理解就是平时书写md文档的语法
import remarkGfm from "remark-gfm";
// md文档所需要的样式，例如表格的线条等等
import "github-markdown-css";
import rehypeRaw from "rehype-raw";
import rehypeRewrite from "rehype-rewrite";
import remarkUnwrapImages from "remark-unwrap-images";
// 导入所需的md即可
import md from "@/assets/MDDocument/index.md";
import { useEffect, useState } from "react";
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
    console.log(imgSrc);

    let img = require(`@/assets/MDDocument/img/${imgSrc}`);
    console.log(img, 45644);
    node.properties.src = img;
  }
};
const SPELDocument = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getData(md).then((data) => {
      setValue(data);
    });
  }, [value]);
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
