/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-10 17:04:12
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-10 23:41:56
 * @FilePath: \yellowsky-blog\src\pages\Components\ViewPDF\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import FilePDF from "./FilePDF";
import "./FilePDF.scss";
const ViewPdf = () => {
  const filePath = require("@/assets/others/2024.pdf");
  return (
    <div className="viewPdfStyle">
      <FilePDF filePath={filePath} />
    </div>
  );
};

export default ViewPdf;
