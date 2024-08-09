/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2024-08-08 16:50:10
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2024-08-08 16:50:20
 * @FilePath: \yellowsky-resume\craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};
