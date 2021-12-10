// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import CategoryList from '@/components/homepage/categoryList';
import CarouselComponent from '@/components/homepage/carousel';
import EventListComponent from '@/components/homepage/eventList';

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
