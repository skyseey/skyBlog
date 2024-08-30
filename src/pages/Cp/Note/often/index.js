/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-17 19:45:15
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-18 13:34:38
 * @FilePath: \yellowsky-blog\src\pages\Cp\Note\linuxPage\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SPELDocument from "@/pages/Components/ViewMd";
// 导入所需的md即可
import md from "@/assets/MDDocument/index.md"; // 这里实际上不是文件内容 是文件的地址路径
export default function LinuxPage() {
  return (
    <div>
      <SPELDocument md={md} openWatermark={true} />
    </div>
  );
}
