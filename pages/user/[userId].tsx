import HeaderManager from '@/components/Admin/HeaderManager';
import ListUsers from '@/components/Admin/ListUsers';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import { NextPage } from 'next';
import React from 'react';
const UserDetailPage: NextPage = () => {
  return (
    <>
      <Header />
      <HeaderManager />
      <ListUsers />
      <Footer />
    </>
  );
};

export default UserDetailPage;
