import { IBankPayload } from '@/models/bank.interface';
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
};
