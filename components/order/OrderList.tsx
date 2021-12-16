import React from 'react';
import { Divider, Empty, Pagination } from 'antd';
import OrderItem from './OrderItem';
// import { Typography } from 'antd';

const OrderList: React.FC = () => {
  // const { Title } = Typography;

  if (false) return <Empty />;

  return (
    <article className="order-list">
      <Divider className="order-list__header">My order</Divider>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <div className="order-list__pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </article>
  );
};

export default OrderList;
