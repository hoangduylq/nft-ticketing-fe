import React from 'react';
import { Input, Layout, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/dist/client/router';
export default function Header() {
  const { Header } = Layout;
  const { Search } = Input;
  const router = useRouter();

  const loginHandler = () => {
    router.push('/login');
  };

  const registerHandler = () => {
    router.push('/signup');
  };

  return (
    <Header className="header">
      <div className="container">
        <div className="header-box">
          <h1 className="header__logo">Logo</h1>
          <Search placeholder="Nhập từ khóa" enterButton className="header__search" />

          <Menu theme="dark" mode="horizontal" className="header__navigation">
            <Menu.Item key="1">
              <ShoppingCartOutlined className="header__icon" />
            </Menu.Item>
            <Menu.Item key="2" onClick={registerHandler}>
              Đăng ký
            </Menu.Item>
            <Menu.Item key="3" onClick={loginHandler}>
              Đăng nhập
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
}
