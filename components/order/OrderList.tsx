import React, { useEffect, useState } from 'react';
import { Empty, Pagination } from 'antd';
import OrderItem from './OrderItem';
import { Typography } from 'antd';
import * as api from '../../api/index';
import { IOrderPayload } from '@/models/order.interface';

const OrderList: React.FC = () => {
  const { Title } = Typography;
  const [orders, setOrders] = useState<IOrderPayload[]>([]);

  useEffect(() => {
    const getEventPaging = async (page: number, limit: number) => {
      const result: IOrderPayload[] = await api.orderApi.getAllOrder(page, limit);
      setOrders(result);
    };
    getEventPaging(1, 4);
  }, []);

  if (orders.length === 0) return <Empty className="mt-40" />;
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
