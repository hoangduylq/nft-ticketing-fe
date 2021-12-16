import { Layout, Menu, LayoutProps } from 'antd';
import {
  BarsOutlined,
  DingtalkOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GatewayOutlined,
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  MobileOutlined,
  ReadOutlined,
  ShareAltOutlined,
  SmileOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
import React from 'react';

const CategoryList: React.FC = ({ children }: LayoutProps) => {
  return (
    <>
      <Sider
        width={300}
        className="site-layout-background"
        // style={{
        //   overflow: 'auto',
        //   position: 'fixed',
        //   left: 0,
        // }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="0" icon={<HomeOutlined />}>
            Home
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
            My ticket
          </Menu.Item>
          <Menu.Item key="11" icon={<FolderOpenOutlined />}>
            My event
          </Menu.Item>
          <Menu.Item key="12" icon={<FileTextOutlined />}>
            Blog
          </Menu.Item>
          <Menu.Item key="13" icon={<MessageOutlined />}>
            For Organizer
          </Menu.Item>
          <Menu.Item key="14" icon={<MobileOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default CategoryList;
