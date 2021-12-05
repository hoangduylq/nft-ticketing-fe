import FacebookOutlined from '@ant-design/icons/lib/icons/FacebookOutlined';
import { Form, Input, Button, Checkbox } from 'antd';
import { NextPage } from 'next';
import React from 'react';
const Login: NextPage = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div id="Main">
      <div id="Main__header"></div>
      <div id="Main__content">
        <div id="Main__content__login">
          <h1> Đăng nhập</h1>
          <Form
            id="form"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Input placeholder="Email" id="form__email" />

            <Input placeholder="Password" id="form__password" />

            <Form.Item valuePropName="checked" id="form__box">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Button type="primary" id="button__login">
              Đăng nhập
            </Button>
            <Button type="primary" id="button__register">
              Đăng ký
            </Button>

            <Button id="form__facebook">
              <FacebookOutlined className={undefined} />
              <a href="https://www.facebook.com/">Sign in with Facebook</a>
            </Button>
          </Form>
        </div>
        <div id="Main__content__adv">
          <p>Ticket BOX</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
