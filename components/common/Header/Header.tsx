/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button, Input, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
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

  const createEventHandler = () => {
    router.push('/events/create');
  };

  return (
    <Header className="header">
      <div className="container">
        <div className="header-box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQzayB114rbLtLkwpie4Dx7h-0wq0Z42wl4i_AHo70akMm60P9xEwlHsVV-4nSzakP60&usqp=CAU"
            className="header__logo"
          />
          <Search placeholder="Nhập từ khóa" enterButton className="header__search" />

          <Menu mode="horizontal" className="header__navigation">
            <Menu.Item key="1">
              <Button
                type="default"
                shape="round"
                size="large"
                className="header__btn-create"
                onClick={createEventHandler}
              >
                Create event
              </Button>
            </Menu.Item>
            <Menu.Item key="2" onClick={registerHandler}>
              <span>Sign up</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={loginHandler}>
              <span>Sign in</span>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
}
