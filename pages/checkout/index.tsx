// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import InformationBuyer from '@/components/checkout/InformationBuyer';
import InformationCheckout from '@/components/checkout/InformationCheckout';
import { Col, Layout, Row } from 'antd';
const CheckoutPage: NextPageWithLayout = () => {
  const { Content } = Layout;

  return (
    <Content className="checkout">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        <Col span={8}>
          <InformationBuyer />
        </Col>
        <Col span={8}>
          <InformationCheckout />
        </Col>
      </Row>
    </Content>
  );
};

CheckoutPage.Layout = MainLayout;

export default CheckoutPage;
