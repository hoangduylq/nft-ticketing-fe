import React from 'react';
import { Card, Image, Row, Col, Divider, Button } from 'antd';
import { EyeOutlined, EllipsisOutlined } from '@ant-design/icons';

const { Meta } = Card;

const EventList: React.FC = () => {
  return (
    <div className="event-list">
      <Divider orientation="left">Movies</Divider>

      <Row gutter={[24, 24]} justify="space-between" className="event-list-row">
        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title={process.env.BASE_URL} description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title={process.env.BASE_URL} description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
            actions={[<EyeOutlined key="eye" />, <EllipsisOutlined key="ellipsis" />]}
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
      </Row>

      <Divider className="see-more">
        <Button type="primary" shape="round" size="large">
          See More
        </Button>
      </Divider>
    </div>
  );
};

export default EventList;
