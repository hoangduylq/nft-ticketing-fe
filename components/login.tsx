import { FacebookFilled } from '@ant-design/icons';
import { Input, Button, Form } from 'antd';
import React from 'react';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className="box">
      <h1 className="heading"> Đăng nhập</h1>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập email', type: 'email' }]}
          className="form__item"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          className="form__item"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} className="form__item form__button mt-10">
          <Button type="primary" htmlType="submit" size="large" shape="round">
            Đăng nhập
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} className="form__item form__button">
          <Button type="primary" htmlType="submit" size="large" shape="round">
            <span className="mr-5">
              <FacebookFilled />
            </span>
            <span> Đăng nhập bằng Facebook</span>
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Login;
