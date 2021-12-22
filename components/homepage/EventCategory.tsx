import { Layout, Menu, LayoutProps } from 'antd';
import {
  BarsOutlined,
  DingtalkOutlined,
  FolderOpenOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GatewayOutlined,
  HeartOutlined,
  HomeOutlined,
  ReadOutlined,
  ShareAltOutlined,
  SmileOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

const EventCategory: React.FC = ({ children }: LayoutProps) => {
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;
  return (
    <>
      <Sider width={300} className="site-layout-background">
        <Menu mode="inline" defaultOpenKeys={['sub1']} className="event-category__menu">
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<BarsOutlined />} title="Category Event">
            <Menu.Item key="1" icon={<HeartOutlined />}>
              Movies
            </Menu.Item>
            <Menu.Item key="2" icon={<SoundOutlined />}>
              Live music
            </Menu.Item>
            <Menu.Item key="3" icon={<GatewayOutlined />}>
              Theater - Art Culture
            </Menu.Item>
            <Menu.Item key="4" icon={<ShareAltOutlined />}>
              Community
            </Menu.Item>
            <Menu.Item key="5" icon={<ReadOutlined />}>
              Course
            </Menu.Item>
            <Menu.Item key="6" icon={<SmileOutlined />}>
              Attractions
            </Menu.Item>
            <Menu.Item key="7" icon={<DingtalkOutlined />}>
              Sport
            </Menu.Item>
            <Menu.Item key="8" icon={<FullscreenExitOutlined />}>
              Events at Ho Chi Minh City
            </Menu.Item>
            <Menu.Item key="9" icon={<FullscreenOutlined />}>
              Events at Ha Noi
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="10" icon={<UserOutlined />}>
            <Link href="/order">My order</Link>
          </Menu.Item>
          <Menu.Item key="11" icon={<FolderOpenOutlined />}>
            <Link href="/events/my-event"> My event</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="event-category-layout">
        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </>
  );
};

export default EventCategory;
