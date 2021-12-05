import { FacebookFilled } from '@ant-design/icons';
import { Input, Button, Form, Radio } from 'antd';
import React from 'react';

const Signup: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className="box">
      <h1 className="heading"> Đăng ký</h1>
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
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
          className="form__item"
        >
          <Input />
        </Form.Item>

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

        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
          className="form__item"
        >
          <Radio.Group>
            <Radio value="Female">Nữ</Radio>
            <Radio value="Male">Nam</Radio>
            <Radio value="Other">Khác</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} className="form__item form__button mt-10">
          <Button type="primary" htmlType="submit" size="large" shape="round">
            Đăng ký
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} className="form__item form__button">
          <Button type="primary" htmlType="submit" size="large" shape="round">
            <span className="mr-5">
              <FacebookFilled />
            </span>
            <span> Đăng ký bằng Facebook</span>
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Signup;
