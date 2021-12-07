import { SignupPayload } from '../models/sigup.interface';
import axiosClient from './axios-client';
import { LoginPayload } from '@/models/auth.interface';

export const authApi = {
  signup(payload: SignupPayload) {
    return axiosClient.post('/users/signup', payload);
  },

  login(payload: LoginPayload) {
    return axiosClient.post('/auth/login', payload);
  },

  loginFacebook(accessToken: string) {
    return axiosClient.get(`auth/facebook?access_token=${accessToken}`);
  },

  logout() {
    return axiosClient.post('/logout');
  },

  getProfile() {
    return axiosClient.get('/profile');
  },
};
