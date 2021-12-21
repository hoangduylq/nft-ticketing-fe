import React, { useEffect, useState } from 'react';
import { Empty, Pagination } from 'antd';
import OrderItem from './OrderItem';
import { Typography } from 'antd';
import { useAppSelector } from 'app/hooks';
import { selectorUser } from 'app/user/userSlice';
import * as api from '../../api/index';
import { IOrderPayload } from '@/models/order.interface';

const OrderList: React.FC = () => {
  const { Title } = Typography;
  const [orders, setOrders] = useState<IOrderPayload[]>([]);
  const user = useAppSelector(selectorUser);

  useEffect(() => {
    const getEventPaging = async (page: number, limit: number, id: string) => {
      const result: IOrderPayload[] = await api.ordertApi.getAllOrder(page, limit, id);
      setOrders(result);
    };
    if (user.id) {
      getEventPaging(1, 5, user.id);
    }
  }, [user.id]);
  console.log(orders);

  if (orders.length === 0) return <Empty />;

  return (
    <article className="order-list">
      <Title level={3} className="order-list__header">
        My order
      </Title>
      {orders.map((order) => (
        <OrderItem key={order.id} item={order} />
      ))}
      <div className="order-list__pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </article>
  );
};

export default OrderList;
