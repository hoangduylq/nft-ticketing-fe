import { IEventPayload } from '@/models/event.interface';
import { Empty, Pagination, Row } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as api from '../../api/index';
import EvenItem from '../event/EventItem';

const EventListDetail: React.FC = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId ? router.query.categoryId.toString() : '';
  const [pageInfo, setPageInfo] = useState({ page: 1, pageSize: 6 });
  const [listEvent, setListEvents] = useState<IEventPayload[]>([]);

  useEffect(() => {
    const getEventsByCategory = async (id: string) => {
      const result = await api.eventApi.getEventPagingByCategory(
        pageInfo.page,
        pageInfo.pageSize,
        id
      );
      setListEvents(result);
    };
    getEventsByCategory(categoryId);
  }, [pageInfo.page, pageInfo.pageSize, categoryId]);

  return (
    <article className="event-list">
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

      {listEvent.length > 0 && (
        <div className="event-list__pagination">
          <Pagination defaultCurrent={pageInfo.page} pageSize={pageInfo.pageSize} />
        </div>
      )}
    </article>
  );
};

export default EventListDetail;
