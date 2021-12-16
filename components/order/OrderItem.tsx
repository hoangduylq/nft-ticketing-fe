import React from 'react';
import { Avatar, Col, Empty, Image, Row, Table, Tabs } from 'antd';
import {
  AntDesignOutlined,
  DownloadOutlined,
  EnvironmentFilled,
  FieldTimeOutlined,
  ProfileOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';

const OrderItem: React.FC = () => {
  const { Title } = Typography;
  const { TabPane } = Tabs;

  const columns = [
    {
      title: 'TICKET TYPE',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'UNIT PRICE',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'TOTAL AMOUNT',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'So You Think You Cant? (Present English)',
      quantity: 32,
      price: 100,
      total: 3200,
    },
  ];

  const columnsTicket = [
    {
      title: 'No',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'TICKET KEY',
      dataIndex: 'ticket',
      key: 'ticket',
    },
    {
      title: 'DOWNLOAD',
      dataIndex: 'download',
      key: 'download',
    },
  ];

  const dataTicket = [
    {
      key: '1',
      number: '1',
      ticket: '1231231321321231321321321',
      download: <DownloadOutlined />,
    },
    {
      key: '1',
      number: '1',
      ticket: '1231231321321231321321321',
      download: <DownloadOutlined />,
    },
    {
      key: '1',
      number: '1',
      ticket: '1231231321321231321321321',
      download: <DownloadOutlined />,
    },
    {
      key: '1',
      number: '1',
      ticket: '1231231321321231321321321',
      download: <DownloadOutlined />,
    },
  ];

  if (false) return <Empty />;

  return (
    <>
      <article className="order-item">
        <Row className="order-item__header">
          <Col flex={1}>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<AntDesignOutlined />}
            />
          </Col>
          <Col className="order-item__info" flex={10}>
            <Title level={2}>So You Think You Cant? (Present English)</Title>
            <div className="order-item__info__item">
              <FieldTimeOutlined />
              <span className="order-item__info__item__description">Mon, 27 Sep 2021 12:00 AM</span>
            </div>
            <div className="order-item__info__item">
              <EnvironmentFilled />
              <span className="order-item__info__item__description">
                DA VINCI ACADEMY - Tầng 3, Số 1 đường 36 - khu C, khu đô thị An Phú An Khánh, Quận
                2, Thành Phố Hồ Chí Minh
              </span>
            </div>
          </Col>

          <Col className="order-item__qr">
            <Avatar
              shape="square"
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={
                <Image
                  src="https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
                  alt="/"
                  preview={false}
                />
              }
            />
          </Col>
        </Row>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <ProfileOutlined />
                Order Detail
              </span>
            }
            key="1"
          >
            <Table columns={columns} dataSource={data} pagination={false} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <SolutionOutlined />
                Your Tickets
              </span>
            }
            key="2"
          >
            <Table columns={columnsTicket} dataSource={dataTicket} />
          </TabPane>
        </Tabs>
      </article>
    </>
  );
};

export default OrderItem;
