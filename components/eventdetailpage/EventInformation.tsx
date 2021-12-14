import { Col, Row, Image, Layout, Card } from 'antd';
import { Button } from 'antd/lib/radio';

import React from 'react';

const EventInformation: React.FC = () => {
  return (
    <Layout>
      <Row justify="center" className="row-content">
        <Col>
          <div className="info-container--img">
            <Image
              src="https://photo-cms-viettimes.zadn.vn/w666/Uploaded/2021/qjrfn/2016_02_26/panda4hobazbbo_zntg.jpg"
              height={400}
              width={600}
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="info-container--content">
            <Card title="Name Event" bordered={false} style={{ height: 400, width: 600 }}>
              <p>Friday, 04 month 12 2021 (08:00 PM - 10:30 PM)</p>
              <p>Zonidet platform</p>
              <p>150.000 VND</p>
              <Button className="btn--submit">Buy Now</Button>
            </Card>
          </div>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Button>Follow</Button>
        <Button>Share</Button>
      </Row>
    </Layout>
  );
};

export default EventInformation;
