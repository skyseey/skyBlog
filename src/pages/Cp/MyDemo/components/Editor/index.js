/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2025-04-05 21:54:21
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-05-26 18:09:21
 * @FilePath: \yellowsky-blog\src\pages\Cp\MyDemo\components\TodoAnimation\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Style from "./index.module.scss";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // 引入样式
const Edite = () => {
  const [content, setContent] = useState("");
  return (
    <div className={Style.ReEditorStyle}>
      <ReactQuill
        theme="snow" // 主题风格
        value={content}
        onChange={setContent}
        modules={{
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
      />
    </div>
  );
};
export default Edite;
