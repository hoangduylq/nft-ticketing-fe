import { IBankPayload } from '@/models/bank.interface';
import { IPayload } from '@/models/jwtPayload.interface';
import axiosClient from './axios-client';

export const userApi = {
  findBankByUserId(id: string) {
    return axiosClient.get(`/payment/bank/${id}`);
  },

  createBank(payload: IBankPayload) {
    const token = localStorage.getItem('token');

    return axiosClient.post('/payment/bank', payload, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  },

  getUser(token: string): Promise<IPayload> {
    return axiosClient.get('/users/profile', {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  },
};
