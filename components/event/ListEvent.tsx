import { IEventPayload } from '@/models/event.interface';
import { Divider, Pagination } from 'antd';
import { useAppSelector } from 'app/hooks';
import { selectorUser } from 'app/user/userSlice';
import React, { useEffect, useState } from 'react';
import * as api from '../../api/index';
import EvenItem from './EventItem';

const ListEvent: React.FC = () => {
  const [listEvent, setListEvent] = useState<IEventPayload[]>([]);
  const user = useAppSelector(selectorUser);

  useEffect(() => {
    const getEventPaging = async (page: number, pageSize: number, id: string) => {
      const result: IEventPayload[] = await api.eventApi.getAllEvent(page, pageSize, id);
      setListEvent(result);
    };

    getEventPaging(1, 5, user.id);
  }, [user.id]);

  useEffect(() => {
    console.log(listEvent);
  }, [listEvent]);

  return (
    <article className="order-list">
      <Divider className="order-list__header">My order</Divider>
      {listEvent.map((event) => (
        <EvenItem item={event} key={event.id} />
      ))}
      <div className="order-list__pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </article>
  );
};

export default ListEvent;
