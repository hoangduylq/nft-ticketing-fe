import { IEventPayload } from '@/models/event.interface';
import { Divider, Empty, Pagination, Row } from 'antd';
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
    if (user.id) {
      getEventPaging(1, 5, user.id);
    }
  }, [user.id]);

  return (
    <article className="event-list">
      <Divider className="event-list__header">My Event</Divider>
      {listEvent.length <= 0 && <Empty />}
      {listEvent.length > 0 && (
        <main className="event-list__ contain">
          <Row gutter={[24, 24]} className="event-list-row">
            {listEvent.map((event) => (
              <EvenItem item={event} key={event.id} />
            ))}
          </Row>
        </main>
      )}

      <div className="event-list__pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </article>
  );
};

export default ListEvent;
