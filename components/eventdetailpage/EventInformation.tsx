import { HeartOutlined } from '@ant-design/icons';
import { Col, Row, Image, Layout, Card } from 'antd';
import { Button } from 'antd/lib/radio';

import React from 'react';
const EventInformation: React.FC = () => {
  return (
    <Layout className="info-container ">
      <Row justify="center">
        <Col>
          <div className="info-container--img">
            <Image
              src="https://i.pinimg.com/564x/f9/13/8f/f9138f24256f41b81fc39e1ca26f858e.jpg"
              height={700}
              width={700}
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="info-container--content">
            <Card
              title="Name Event "
              bordered={false}
              style={{ height: 700, width: 700 }}
              cover={<HeartOutlined style={{ fontSize: 50, color: 'blueviolet' }} />}
            >
              <p>Friday, 04 month 12 2021 (08:00 PM - 10:30 PM)</p>
              <p> Zodinet Platform</p>
              <p>From:150.000VND</p>
              <Button className="btn--buy">
                <p>Buy now</p>
              </Button>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default EventInformation;
