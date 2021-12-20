// import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';
import EventCategory from '@/components/homepage/EventCategory';
import EventCarousel from '@/components/homepage/EventCarousel';
import EventList from '@/components/homepage/EventList';
import React, { useLayoutEffect } from 'react';
import * as api from './../api';
import { login } from './../app/user/userSlice';
import { useAppDispatch } from './../app/hooks';
import { IJwtPayload } from '@/models/jwtPayload.interface';

const Home: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const getUserJwt = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const result: IJwtPayload = await api.authApi.getUser(token);
        if (result) {
          dispatch(login(result.payload));
          localStorage.setItem('token', result.accessToken);
        }
      }
    };

    getUserJwt();
  });

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
