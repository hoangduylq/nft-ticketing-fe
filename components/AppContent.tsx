// import { DatePicker, Space } from 'antd';
import React, { useLayoutEffect } from 'react';
import * as api from './../api';
import { login } from './../app/user/userSlice';
import { useAppDispatch } from './../app/hooks';
import { IJwtPayload } from '@/models/jwtPayload.interface';

const AppContent: React.FC = ({ children }) => {
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
  }, [dispatch]);

  return <>{children}</>;
};

export default AppContent;
