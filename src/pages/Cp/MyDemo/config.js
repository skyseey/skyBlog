/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2025-04-05 20:35:04
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-04-11 15:50:12
 * @FilePath: \yellowsky-blog\src\pages\Cp\MyDemo\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const demosList = [
  {
    title: "TODO_ANIMATION",
    content: ["· 通过TODO来使用动画效果", "· 点击更多体验"],
    component: () => import("@/pages/Cp/MyDemo/components/TodoAnimation/index"),
  },
  {
    title: "EditableTable",
    content: ["· 可编辑table", "· 点击更多体验"],
    component: () => import("@/pages/Cp/MyDemo/components/EditableTable/index"),
  },
  {
    title: "CustomForm",
    content: ["· 自定义表单", "· 点击更多体验"],
    component: () => import("@/pages/Cp/MyDemo/components/CustomForm/index"),
  },
];
