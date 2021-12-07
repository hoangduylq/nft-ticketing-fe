// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import CategoryList from '@/components/homepage/categoryList';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <CategoryList />
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
