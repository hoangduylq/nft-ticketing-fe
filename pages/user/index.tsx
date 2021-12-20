import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import UserProfile from '@/components/Profile/UserProfile';
import { NextPage } from 'next';
import React from 'react';
const UsersPage: NextPage = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <Footer />
    </>
  );
};

export default UsersPage;
