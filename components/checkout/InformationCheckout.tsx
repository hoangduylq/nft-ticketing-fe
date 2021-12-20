import { Avatar, Button, Checkbox, Col, Divider, Row, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

const InformationCheckout: React.FC = () => {
  const { Title } = Typography;

  return (
    <article className="information-checkout">
      <Row>
        <Col flex={1}>
          <Avatar
            shape="square"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<UserOutlined />}
          />
        </Col>

        <Col flex={7}>
          <Title level={5}>ETERNALS</Title>
          <div className="information-checkout__event__description">
            <span>C13</span>
            <Divider type="vertical" />
            <span>2 hours 37 minutes</span>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row className="information-checkout__event">
        <Space size={4} direction="vertical" className="information-checkout__event__wrap">
          <Title level={5}>BHD Start Pham Hung</Title>
          <span>Cinema room 5</span>
          <span>14:20 - 16:57, 19/12/2021</span>
          <span>D17</span>
          <div className="information-checkout__event__ticket">
            <span>Adult VIP 2D (x2)</span>
            <span>90,000đ</span>
          </div>
        </Space>
      </Row>
      <Divider />
      <Row className="information-checkout__event__total">
        <span>90,000đ</span>
      </Row>
      <Row className="information-checkout__term">
        <Checkbox>
          I agree with <a href="">Terms and Condition and am purchasing tickets</a> for age
          appropriate audience
        </Checkbox>
      </Row>
      <Row>
        <Button type="default" htmlType="submit" size="large" className="form__button">
          <span className="form__button-label">Pay</span>
        </Button>
      </Row>
    </article>
  );
};

export default InformationCheckout;
