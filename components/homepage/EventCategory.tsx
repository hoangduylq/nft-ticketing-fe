import { Layout, Menu, LayoutProps } from 'antd';
import {
  BarsOutlined,
  FolderOpenOutlined,
  GatewayOutlined,
  HeartOutlined,
  HomeOutlined,
  ShareAltOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const EventCategory: React.FC = ({ children }: LayoutProps) => {
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;
  const router = useRouter();

  const handleClickMenuItem = (e: any) => {
    router.push(`/events/categories/${e.key}`);
  };

  return (
    <>
      <Sider width={300} className="site-layout-background">
        <Menu mode="inline" defaultOpenKeys={['sub1']} className="event-category__menu">
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<BarsOutlined />} title="Category Event">
            <Menu.Item
              key="c6022b20-f3ac-4477-922a-675be5b2fdb1"
              icon={<HeartOutlined />}
              onClick={handleClickMenuItem}
            >
              Movies
            </Menu.Item>
            <Menu.Item
              key="cb9f4525-b6e9-47f8-879b-327dbddeb00c"
              icon={<SoundOutlined />}
              onClick={handleClickMenuItem}
            >
              Live music
            </Menu.Item>
            <Menu.Item
              key="d8dc4274-805d-47e8-8f02-e5c5848c96b4"
              icon={<GatewayOutlined />}
              onClick={handleClickMenuItem}
            >
              Theater - Art Culture
            </Menu.Item>
            <Menu.Item
              key="f61b0beb-1665-4a93-b9c2-44e1378f4f96"
              icon={<ShareAltOutlined />}
              onClick={handleClickMenuItem}
            >
              Community
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
