// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import EventCategory from '@/components/homepage/EventCategory';
import EventCarousel from '@/components/homepage/EventCarousel';
import EventList from '@/components/homepage/eventList';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <EventCategory>
        <EventCarousel />
        <EventList />
        <EventList />
      </EventCategory>
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
