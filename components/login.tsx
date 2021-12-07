/* eslint-disable no-unused-vars */
import { FacebookFilled } from '@ant-design/icons';
import { Input, Button, Form, Col, Row } from 'antd';
import { useEffect } from 'react';
import React, { useState } from 'react';
import AlertMessage, { TypeAlertEnum } from './alert';
import * as api from '../api-client/index';
import { LoginPayload } from '@/models/auth.interface';
import { useRouter } from 'next/dist/client/router';
import { useCookies } from 'react-cookie';

const Login: React.FC = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  const [alertMessage, setAlertMessage] = useState({ message: '', title: TypeAlertEnum.Info });
  const [isDisplayAlert, setIsDisplayAlert] = useState(false);

  useEffect(() => {
    setIsDisplayAlert(alertMessage.message ? true : false);
  }, [alertMessage]);

  const onFinish = async (values: LoginPayload) => {
    try {
      const result: any = await api.authApi.login(values);
      if (result) {
        setCookie('token', result.accessToken);
        setAlertMessage({ message: 'Đăng nhập thành công', title: TypeAlertEnum.Success });
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
        <p>{isDisplayAlert}</p>

        <section className="box">
          <h1 className="heading"> Snake Ticket Online</h1>
          <h3 className="heading--secondary">Hello! lets get started</h3>
          <p className="heading--sub mb-24">Sign in to continue.</p>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className="form"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter email!', type: 'email' }]}
              className="form__item"
            >
              <Input placeholder="Email" size="large" className="form__item__ip" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu!',
                },
              ]}
              className="form__item"
            >
              <Input.Password placeholder="Password" size="large" className="form__item__ip" />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }} className="form__item form__button mt-10">
              <Button type="default" htmlType="submit" size="large" className="form__button">
                <span className="form__button--label">Sign in</span>
              </Button>
            </Form.Item>
            <h4>
              ----------------------------------------------------------
              OR------------------------------------------------------------
            </h4>

            <Form.Item wrapperCol={{ span: 24 }} className="form__item form__button">
              <Button type="default" htmlType="submit" size="large" className="form__button">
                <span className="mr-5">
                  <FacebookFilled />
                </span>
                <span className="form__button--fb"> Login with Facebook</span>
              </Button>
            </Form.Item>
          </Form>
        </section>
      </Col>
    </Row>
  );
};

export default Login;
