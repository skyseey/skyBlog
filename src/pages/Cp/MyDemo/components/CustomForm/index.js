/*
 * @Author: huangtian1_v 1246562955@qq.com
 * @Date: 2025-04-21 20:16:51
 * @LastEditors: huangtian1_v 1246562955@qq.com
 * @LastEditTime: 2025-04-22 00:04:39
 * @FilePath: \yellowsky-blog\src\pages\Cp\MyDemo\components\CustomForm\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Style from "./index.module.scss";
import React, { useEffect, useRef } from "react";
import { message } from "antd";
import CustomFormCp from "./components/form";

let config = {
  formconfig: {
    labelCol: { span: 2 },
    wrapperCol: { span: 8 },
    style: { with: "100%" },
    initialValues: { remember: true },
    autoComplete: "off",
  },
  itemoptions: [
    {
      name: "username",
      label: "用户名",
      rules: [{ required: true, message: "请输入用户名!" }],
      span: 16,
      optionType: {
        type: "MInput",
        optionInfos: {
          type: "text",
          placeholder: "请输入用户名",
        },
      },
    },
    {
      name: "password",
      label: "密码",
      rules: [{ required: true, message: "请输入密码!" }],
      span: 16,
      optionType: {
        type: "MInput",
        optionInfos: {
          type: "password",
          placeholder: "请输入密码",
        },
      },
    },
  ],
};

export default function CustomForm() {
  const formRef = useRef(null);
  const onFinish = (values) => {
    console.log("Success:", values);
    message.success(JSON.stringify(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    console.log("CustomForm", formRef.current);
    formRef.current.onFill({
      username: "黄天",
    });
  }, []);
  return (
    <div className={Style.CustomFormStyle}>
      <CustomFormCp
        formconfig={config}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        ref={formRef}
      ></CustomFormCp>
    </div>
  );
}
