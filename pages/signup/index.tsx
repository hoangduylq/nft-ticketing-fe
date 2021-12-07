import { NextPage } from 'next';
import Signup from '@/components/signup';
import { useAppSelector } from './../../app/hooks';
import { selectorUser } from './../../app/user/userSlice';
import NotFound from '@/components/common/NotFound/NotFound';

const SignupPage: NextPage = () => {
  const user = useAppSelector(selectorUser);

  return user.isLoggedIn ? <NotFound /> : <Signup />;
};

export default SignupPage;
