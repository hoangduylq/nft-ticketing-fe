import { LayoutProps } from '@/models/index';
import React from 'react';
import { Layout } from 'antd';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import Link from 'next/link';
// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

export function MainLayout({ children }: LayoutProps) {
  return (
    <Layout>
      <Header />
      <Footer />
      <Layout>{children}</Layout>
    </Layout>
  );
}
