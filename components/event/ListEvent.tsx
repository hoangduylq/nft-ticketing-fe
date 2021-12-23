import { IEventPayload } from '@/models/event.interface';
import { Divider, Empty, Pagination, Row } from 'antd';
import { useAppSelector } from 'app/hooks';
import { selectorUser } from 'app/user/userSlice';
import React, { useEffect, useState } from 'react';
import * as api from '../../api/index';
import EvenItem from './EventItem';

const paging = {
  page: 1,
  pageSize: 6,
};

const ListEvent: React.FC = () => {
  const [listEvent, setListEvent] = useState<IEventPayload[]>([]);
  const user = useAppSelector(selectorUser);

  useEffect(() => {
    const getEventPaging = async (page: number, pageSize: number, id: string) => {
      const result: IEventPayload[] = await api.eventApi.getEventPagingByUserId(page, pageSize, id);
      setListEvent(result);
    };
    if (user.id) {
      getEventPaging(paging.page, paging.pageSize, user.id);
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
              <EvenItem item={event} key={event.id} isOwner={true} />
            ))}
          </Row>
        </main>
      )}

      {listEvent.length > 0 && (
        <div className="event-list__pagination">
          <Pagination defaultCurrent={paging.page} pageSize={paging.pageSize} />
        </div>
      )}
    </article>
  );
};

export default ListEvent;
