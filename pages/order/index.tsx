// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import EventCategory from '@/components/homepage/EventCategory';
import OrderList from '@/components/order/OrderList';
import { useAppSelector } from './../../app/hooks';
import { selectorUser } from './../../app/user/userSlice';
import NotFound from '@/components/common/NotFound/NotFound';

const OrderPage: NextPageWithLayout = () => {
  const user = useAppSelector(selectorUser);

  return user.isLoggedIn ? (
    <EventCategory>
      <OrderList />
    </EventCategory>
  ) : (
    <NotFound />
  );
};

OrderPage.Layout = MainLayout;

export default OrderPage;
