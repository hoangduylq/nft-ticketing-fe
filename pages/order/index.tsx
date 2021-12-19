// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import EventCategory from '@/components/homepage/EventCategory';
import OrderList from '@/components/order/OrderList';

const OrderPage: NextPageWithLayout = () => {
  return (
    <>
      <EventCategory>
        <OrderList />
      </EventCategory>
    </>
  );
};

OrderPage.Layout = MainLayout;

export default OrderPage;
