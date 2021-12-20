import EventCategory from '@/components/homepage/EventCategory';
import { MainLayout } from '@/components/layout';
import UserProfile from '@/components/profile/UserProfile';
import { NextPageWithLayout } from '@/models/common.interface';
import React from 'react';
const UsersPage: NextPageWithLayout = () => {
  return (
    <EventCategory>
      <article className="user-profile">
        <UserProfile />
      </article>
    </EventCategory>
  );
};

UsersPage.Layout = MainLayout;

export default UsersPage;
