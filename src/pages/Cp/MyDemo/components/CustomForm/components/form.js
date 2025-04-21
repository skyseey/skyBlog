import React, { useImperativeHandle, forwardRef } from "react";
import { Form, Space, Button, Row, Col } from "antd";
import { MInput } from "@/pages/Cp/MyDemo/components/CustomForm/components/m-options.js";

const ComponentsCp = {
  MInput,
};
// function DynamicTag({ tagName, children, ...props }) {
//   const Tag = tagName; // 变量名必须大写（React 要求组件名大写）
//   console.log(Tag);
//   return <Tag {...props}>{children}</Tag>;
// }

const ItemCp = ({ label, name, rules, optionType }) => {
  // const DynamicComponent = React.lazy(getType(optionType));
  const Cp = ComponentsCp[optionType.type];
  return (
    <Form.Item label={label} name={name} rules={rules}>
      {/* <DynamicTag tagName={optionType.type}></DynamicTag> */}
      <Cp {...optionType.optionInfos}></Cp>
      {/* <Suspense fallback={<Skeleton size="small" />}>
        <DynamicComponent {...optionType.optionInfos} />
      </Suspense> */}
    </Form.Item>
  );
};

function CustomForm(props, ref) {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFill = (data) => {
    data && form.setFieldsValue(data);
  };

  useImperativeHandle(ref, () => {
    return {
      onFill,
    };
  });

  return (
    <Form
      form={form}
      name="basic"
      {...props.formconfig.formconfig}
      onFinish={props.onFinish}
      onFinishFailed={props.onFinishFailed}
    >
      <Row gutter={24}>
        {props.formconfig.itemoptions.map((item, index) => {
          return (
            <Col span={item.span} key={index}>
              <ItemCp {...item}></ItemCp>
            </Col>
          );
        })}
        {/* 提交按钮 */}
        <Col span={24}>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default forwardRef(CustomForm);
