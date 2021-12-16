// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import CarouselComponent from '@/components/homepage/Carousel';
import CategoryList from '@/components/homepage/CategoryList';
import EventListComponent from '@/components/homepage/EventList';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <CategoryList>
        <CarouselComponent />
        <EventListComponent />
        <EventListComponent />
      </CategoryList>
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
