import { NextPage } from 'next';
import { selectorUser } from './../../app/user/userSlice';
import { useAppSelector } from './../../app/hooks';
import NotFound from '@/components/common/NotFound/NotFound';
const AdminPage: NextPage = () => {
  const user = useAppSelector(selectorUser);

  return user.role !== 'Admin' ? <NotFound /> : <div>Admin Page</div>;
};

export default AdminPage;
