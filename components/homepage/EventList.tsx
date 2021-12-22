import React, { useEffect, useState } from 'react';
import { Image, Row, Divider, Button, Typography } from 'antd';

import * as api from '../../api/index';
import { IEventPayload } from '@/models/event.interface';
import EvenItem from '../event/EventItem';
import { useRouter } from 'next/router';

interface IEventListProps {
  id: string;
  name: string;
}

const EventList: React.FC<IEventListProps> = (props) => {
  const { Title } = Typography;
  const router = useRouter();

  const [listEvent, setListEvents] = useState<IEventPayload[]>([]);
  // const [pageInfo, setPageInfo] = useState({ page: 1, pageSize: 6 });

  useEffect(() => {
    const getEventsByCategory = async (id: string) => {
      const result = await api.eventApi.getEventPagingByCategory(1, 6, id);
      setListEvents(result);
    };

    getEventsByCategory(props.id);
  }, [props.id]);

  const onSeeMore = () => {
    router.push(`events/categories/${props.id}`);
  };

  return (
    <div className="event-list">
      <div className="event-list__title-wrap">
        <Image
          src="https://ticketbox.vn/_next/static/images/home-leftmovie-desktop.svg"
          alt=""
          preview={false}
        />
        <Title level={2} className="event-list__title" italic={true}>
          {props.name}
        </Title>
        <Image
          src="https://ticketbox.vn/_next/static/images/home-rightmovie-desktop.svg"
          alt=""
          preview={false}
        />
      </div>
      <Divider className="space-title" />

      <Row gutter={[24, 24]} className="event-list-row">
        {listEvent.length > 0 &&
          listEvent.map((event) => <EvenItem item={event} key={event.id} isHome={true} />)}
      </Row>

      <Divider className="see-more">
        <Button type="primary" shape="round" size="large" onClick={onSeeMore}>
          See More
        </Button>
      </Divider>
    </div>
  );
};

export default EventList;
