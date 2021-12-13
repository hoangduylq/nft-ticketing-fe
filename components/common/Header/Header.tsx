/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Avatar, Button, Input, Layout, Menu, Popover } from 'antd';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectorUser, logout } from 'app/user/userSlice';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
export default function Header() {
  const { Header } = Layout;
  const { Search } = Input;
  const router = useRouter();
  const user = useAppSelector(selectorUser);
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    router.push('/login');
  };

  const registerHandler = () => {
    router.push('/signup');
  };

  const createEventHandler = () => {
    router.push('/events/create');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const text = <span>Title</span>;
  const contentPophoverUser = (
    <div>
      <p>Edit</p>
      <p onClick={handleLogout} className="button__logout">
        Logout <LogoutOutlined />
      </p>
    </div>
  );

  const ItemMenu = () => {
    return user.isLoggedIn ? (
      <>
        <Menu.Item>
          <Popover
            placement="bottomLeft"
            title={text}
            content={contentPophoverUser}
            trigger="hover"
            className="header__user"
          >
            <Avatar icon={<UserOutlined />} />
            <span>{user.name}</span>
          </Popover>
        </Menu.Item>
      </>
    ) : (
      <>
        <Menu.Item key="2" onClick={registerHandler}>
          Sign up
        </Menu.Item>
        <Menu.Item key="3" onClick={loginHandler}>
          Sign in
        </Menu.Item>
      </>
    );
  };

  return (
    <Header className="header">
      <div className="container">
        <div className="header-box">
          <img
            src="https://zodinet.com/wp-content/uploads/2021/09/logo-footer.png"
            className="header__logo"
          />
          <Search placeholder="Search" enterButton className="header__search" />

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
            <ItemMenu />
          </Menu>
        </div>
      </div>
    </Header>
  );
}
