import { selectorUser } from './../../app/user/userSlice';
import { MainLayout } from '@/components/layout';
import { useAppSelector } from './../../app/hooks';
import NotFound from '@/components/common/NotFound/NotFound';
import { NextPageWithLayout } from '@/models/common.interface';
import HeaderManager from '@/components/Admin/HeaderManager';
import ListUsers from '@/components/Admin/ListUsers';
const AdminPage: NextPageWithLayout = () => {
  const user = useAppSelector(selectorUser);

  return user.role !== 'admin' ? (
    <NotFound />
  ) : (
    <article className="admin-page">
      <HeaderManager />
      <ListUsers />
    </article>
  );
};

AdminPage.Layout = MainLayout;

export default AdminPage;
