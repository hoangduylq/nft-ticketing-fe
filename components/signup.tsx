import { SignupPayload } from '@/models/sigup.interface';
import { FacebookFilled } from '@ant-design/icons';
import { Input, Button, Form, Radio, Row, Col } from 'antd';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import * as api from '../api-client/index';
import AlertMessage, { TypeAlertEnum } from './alert';

const Signup: React.FC = () => {
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState({ message: '', title: TypeAlertEnum.Info });
  const [isDisplayAlert, setIsDisplayAlert] = useState(false);

  useEffect(() => {
    setIsDisplayAlert(alertMessage.message ? true : false);
  }, [alertMessage]);

  const onFinish = async (values: SignupPayload) => {
    try {
      const result = await api.authApi.signup(values);
      if (result) {
        setAlertMessage({ message: 'Đăng ký thành công', title: TypeAlertEnum.Success });
        return router.push('/');
      }
    } catch (error: any) {
      setAlertMessage({ message: error.message, title: TypeAlertEnum.Error });
    }
  };

  return (
    <Row>
      <Col offset="16" span="8">
        {isDisplayAlert && (
          <AlertMessage message={alertMessage.message} title={alertMessage.title} />
        )}
      </Col>
      <Col span="24">
        <section className="box">
          <h1 className="heading"> Đăng ký</h1>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className="form"
            scrollToFirstError={true}
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
              rules={[
                {
                  type: 'string',
                  required: true,
                  message: 'Vui lòng nhập mật khẩu!',
                },
                {
                  pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message: 'Mật khẩu phải bao gồm chữ hoa, thường và số',
                },
                {
                  min: 8,
                  message: 'Mật khẩu tối thiểu 8 ký tự',
                },
              ]}
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
      </Col>
    </Row>
  );
};

export default Signup;
