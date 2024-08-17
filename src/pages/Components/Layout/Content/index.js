/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-16 15:59:47
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-17 14:27:49
 * @FilePath: \yellowsky-blog\src\pages\Components\Layout\Header\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import "./index.scss";
const Content = ({ children }) => {
  return <div className="contentStyle">{children ? children : 404}</div>;
};

export default Content;
