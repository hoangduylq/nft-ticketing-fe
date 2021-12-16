/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { Input, Button, Form, Col, Row } from 'antd';
import { useEffect } from 'react';
import React, { useState } from 'react';
import AlertMessage, { TypeAlertEnum } from '../common/Alert/AlertMessage';
import * as api from '../../api/index';
import { LoginPayload } from '@/models/auth.interface';
import { useCookies } from 'react-cookie';
import FacebookLogin from 'react-facebook-login';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkBank, login, selectorUser } from '../../app/user/userSlice';
import { useRouter } from 'next/router';
import { IJwtPayload } from '@/models/jwtPayload.interface';

const Login: React.FC = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  const [alertMessage, setAlertMessage] = useState({ message: '', title: TypeAlertEnum.Info });
  const [isDisplayAlert, setIsDisplayAlert] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectorUser);

  useEffect(() => {
    setIsDisplayAlert(alertMessage.message ? true : false);
  }, [alertMessage]);

  const getBank = async (id: string) => {
    const result = await api.userApi.findBankByUserId(id);
    return result;
  };

  const onFinish = async (values: LoginPayload) => {
    try {
      const result: IJwtPayload = await api.authApi.login(values);
      if (result) {
        setCookie('token', result.accessToken);
        dispatch(login(result.payload));

        const isBankAccount = (await getBank(user.id)) ? true : false;
        dispatch(checkBank({ isBankAccount }));
        // dispatch(cre)

        setAlertMessage({ message: 'Đăng nhập thành công', title: TypeAlertEnum.Success });
        return router.push('/');
      }
    } catch (error: any) {
      setAlertMessage({ message: error.message, title: TypeAlertEnum.Error });
    }
  };

  const responseFacebook = async (response: any) => {
    try {
      const result: any = await api.authApi.loginFacebook(response.accessToken);
      if (result) {
        // setCookie('token', result.accessToken);
        dispatch(login(result.payload));
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
        <section className="box">
          <h1 className="heading"> Snake Ticket Online</h1>
          <h3 className="heading--secondary">Hello! let&apos;s get started</h3>
          <p className="heading--sub mb-24">Sign in to continue.</p>
          <Form
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="on"
            className="form"
            scrollToFirstError={true}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter email!', type: 'email' }]}
              className="form__item"
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  type: 'string',
                  required: true,
                  message: 'Please enter password!',
                },
              ]}
              className="form__item"
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }} className="form__item  mt-10">
              <Button type="default" htmlType="submit" size="large" className="form__button">
                <span className="form__button-label">Login</span>
              </Button>
            </Form.Item>
            <div className="space_login">
              <span>Or</span>
            </div>

            <Form.Item
              wrapperCol={{ span: 24 }}
              className="form__item form__button__login_facebook"
            >
              <FacebookLogin
                appId={process.env.FB_APP_ID || ''}
                autoLoad={false}
                fields="name,email,picture"
                // onClick={hanldeLoginFacebook}
                size="small"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />
            </Form.Item>

            <p className="form__redirect">
              Don&apos;t have an account?
              <span className="form__redirect-link ml-5">
                <Link href="/signup">Sign up</Link>
              </span>
            </p>
          </Form>
        </section>
      </Col>
    </Row>
  );
};

export default Login;