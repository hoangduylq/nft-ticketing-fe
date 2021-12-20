import { IEventPayload } from '@/models/event.interface';
import { useAppSelector } from 'app/hooks';
import { selectorUser } from 'app/user/userSlice';
import React, { useEffect, useState } from 'react';
import * as api from '../../api/index';

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

  return <></>;
};

export default ListEvent;
