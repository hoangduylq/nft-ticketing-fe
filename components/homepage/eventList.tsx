import React from 'react';
import { Card, Image, Row, Col, Divider, Button, Typography } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';

const EventList: React.FC = () => {
  const { Title } = Typography;
  const { Meta } = Card;

  return (
    <div className="event-list">
      {/* <Divider orientation="left">Movies</Divider> */}
      <div className="event-list__title-wrap">
        <Image src="https://ticketbox.vn/_next/static/images/home-leftmovie-desktop.svg" alt="" />
        <Title level={2} className="event-list__title" italic={true}>
          Movies
        </Title>
        <Image src="https://ticketbox.vn/_next/static/images/home-rightmovie-desktop.svg" alt="" />
      </div>
      <Divider className="space-title" />

      <Row gutter={[24, 24]} justify="space-between" className="event-list-row">
        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
          </Card>
        </Col>

        <Col sm={24} md={12} xl={8}>
          <Card
            className="event-list__item"
            cover={
              <Image
                alt="example"
                src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
                preview={false}
              />
            }
          >
            <Meta
              title="Chirstmas Crecendo"
              description={
                <>
                  <FieldTimeOutlined />
                  <span>25/12/2021</span>
                </>
              }
            />
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
