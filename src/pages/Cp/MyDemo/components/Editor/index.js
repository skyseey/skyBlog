/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2025-04-05 21:54:21
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-05-27 21:36:31
 * @FilePath: \yellowsky-blog\src\pages\Cp\MyDemo\components\TodoAnimation\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Style from "./index.module.scss";
import "react-quill/dist/quill.snow.css"; // 引入样式
import "./custom-styles.scss";
import ReactQuill from "react-quill";
import { useRef, useState } from "react";

// 工具栏配置
const modules = {
  // toolbar: [
  //   ["bold", "italic", "underline", "strike"],
  //   ["blockquote", "code-block"],
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //   [{ list: "ordered" }, { list: "bullet" }],
  //   ["link", "image", "video"],
  //   ["clean"],
  // ],
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

const Edite = () => {
  const [content, setContent] = useState("");
  const quillRef = useRef(null);
  const onChange = (value) => {
    console.log(value);
    setContent(value);
  };
  return (
    <div className={Style.ReEditorStyle}>
      <ReactQuill
        ref={quillRef}
        theme="snow" // 主题风格
        value={content}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
      <div className="mt-4 border rounded-lg p-4">
        <h2 className="text-xl font-bold">预览</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
export default Edite;
