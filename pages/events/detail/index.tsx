import EventDescription from '@/components/eventdetailpage/EventDescription';
import EventInformation from '@/components/eventdetailpage/EventInformation';
import { NextPage } from 'next';
import React from 'react';
const EventDetailPage: NextPage = () => {
  return (
    <>
      <EventInformation />
      <EventDescription />
    </>
  );
};

export default EventDetailPage;
