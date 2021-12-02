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
    <div className={'Container'}>
      <div className="Container__login">
        <h1> Đăng nhập</h1>
        <Form
          className="form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Input placeholder="Email" className="form__email" />

          <Input placeholder="Password" className="form__password" />

          <Form.Item valuePropName="checked" className="form__box">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Button type="primary" className="button__login">
            Đăng nhập
          </Button>
          <Button type="primary" className="button__register">
            Đăng ký
          </Button>

          <Button className="form__facebook">
            <FacebookOutlined />
            <a href="https://www.facebook.com/">Sign in with Facebook</a>
          </Button>
        </Form>
      </div>
      <div className="Container__adv">
        <p>Ticket BOX</p>
      </div>
    </div>
  );
};

export default Login;
