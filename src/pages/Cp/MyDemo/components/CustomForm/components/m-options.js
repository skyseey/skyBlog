/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2025-04-21 21:58:03
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-04-22 00:06:24
 * @FilePath: \yellowsky-blog\src\pages\Cp\MyDemo\components\CustomForm\components\m-input.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Input } from "antd";

const MInput = (props) => {
  return props.type === "text" ? (
    <Input {...props}></Input>
  ) : (
    <Input.Password {...props}></Input.Password>
  );
};
export { MInput };
